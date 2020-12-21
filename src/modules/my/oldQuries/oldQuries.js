import { LightningElement, track, api } from 'lwc';

import PubSub from 'pubsub-js';
export default class OldQuries extends LightningElement {
    @api mode;

    @track oldqueries = [];

    get todaysDate() {
        let today = new Date();
        return today.toLocaleString();
    }

    isApplicable(obj) {
        return (
            (obj.isFavorite && this.mode === 'favorite') ||
            this.mode === 'history'
        );
    }

    // set only 20 history and 20 favorite queries
    setItemsInLocalStorage(tempMap) {
        // localStorage.setItem('historyQueries', JSON.stringify([...tempMap]));
        tempMap = new Map(JSON.parse(JSON.stringify([...tempMap])));

        let queryArray = [];
        for (let key of tempMap.keys()) {
            queryArray.push(tempMap.get(key));
        }

        queryArray.sort(
            (a, b) => Date.parse(a.queryDate) - Date.parse(b.queryDate)
        );

        console.log('sorted array ', queryArray);

        let resultMap = queryArray.reduce(function (map, obj) {
            map[obj.query + obj.orgName] = obj;
            return map;
        }, {});

        console.log(resultMap, tempMap);

        localStorage.setItem('historyQueries', JSON.stringify([...tempMap]));
    }

    connectedCallback() {
        this.getOldQueries();

        // save history querys here
        PubSub.subscribe('querySave', (msg, data) => {
            let queryKey = data.query + data.orgName;
            let tempMap;

            if (localStorage.getItem('historyQueries')) {
                tempMap = new Map(
                    JSON.parse(localStorage.getItem('historyQueries'))
                );
                if (tempMap.has(queryKey)) {
                    if (tempMap.get(queryKey).isFavorite) {
                        tempMap.set(queryKey, { ...data, isFavorite: true });
                    } else {
                        tempMap.set(queryKey, { ...data, isFavorite: false });
                    }
                } else {
                    tempMap.set(queryKey, { ...data, isFavorite: false });
                }
            } else {
                tempMap = new Map();
                tempMap.set(queryKey, { ...data, isFavorite: false });
            }
            this.setItemsInLocalStorage(tempMap);

            //empty and get new
            this.getOldQueries();
        });
    }

    getOldQueries() {
        this.oldqueries = [];
        if (localStorage.getItem('historyQueries')) {
            let tempMap = new Map(
                JSON.parse(localStorage.getItem('historyQueries'))
            );

            for (let key of tempMap.keys()) {
                this.oldqueries.push(tempMap.get(key));
            }
            if (this.oldqueries.length) {
                this.oldqueries = this.oldqueries
                    .map((el) => {
                        return {
                            variant: el.isFavorite ? 'brand' : 'border-filled',
                            queryKey: el.query + el.orgName,
                            ...el
                        };
                    })
                    .filter((el) => this.isApplicable(el))
                    .sort(
                        (a, b) =>
                            Date.parse(b.queryDate) - Date.parse(a.queryDate)
                    );
            }
        }
    }

    copyQuery(event) {
        let query = event.target.dataset.query;
        console.log('copying query ', query);
        PubSub.publish('queryCopy', {
            query: query
        });
    }

    toggleFavorite(event) {
        let queryKey = event.target.dataset.querykey;
        let tempMap = new Map(
            JSON.parse(localStorage.getItem('historyQueries'))
        );
        let data = tempMap.get(queryKey);
        if (!tempMap.get(queryKey).isFavorite) {
            tempMap.set(queryKey, { ...data, isFavorite: true });
        } else {
            tempMap.set(queryKey, { ...data, isFavorite: false });
        }

        this.setItemsInLocalStorage(tempMap);
        this.getOldQueries();
    }

    deleteQuery(event) {
        let queryKey = event.target.dataset.querykey;
        console.log(queryKey);
        let tempMap = new Map(
            JSON.parse(localStorage.getItem('historyQueries'))
        );

        tempMap.delete(queryKey);

        this.setItemsInLocalStorage(tempMap);
        this.getOldQueries();
    }
}
