import { LightningElement, track, api } from 'lwc';

import PubSub from 'pubsub-js';
export default class OldQuries extends LightningElement {
    @api mode;

    @track oldqueries = [
        {
            id: 1,
            query: 'select id from user',
            isFavorite: true,
            displayName: this.todaysDate + 'my organame'
        },
        {
            id: 2,
            query: 'select id from child__c',
            isFavorite: false,
            displayName: this.todaysDate + 'my organame'
        },
        {
            id: 3,
            query: 'select id from boat__c',
            isFavorite: true,
            displayName: this.todaysDate + 'my organame'
        }
    ];

    get todaysDate() {
        let today = new Date();
        return today.toLocaleString();
    }

    isApplicable(obj) {
        return (
            (obj.isFavorite && this.mode === 'favorite') ||
            (!obj.isFavorite && this.mode === 'history')
        );
    }

    connectedCallback() {
        this.oldqueries = this.oldqueries
            .map((el) => {
                return {
                    variant: el.isFavorite ? 'brand' : 'border-filled',
                    ...el
                };
            })
            .filter((el) => this.isApplicable(el));

        console.log('this.oldqueries', this.oldqueries);

        localStorage.getItem('favoriteQueries');
        localStorage.getItem('historyQueries');
        PubSub.subscribe('querySave', (msg, data) => {
            console.log(msg, data);
        });
    }

    copyQuery(event) {
        let index = event.target.dataset.id;
        console.log(index);
    }
}
