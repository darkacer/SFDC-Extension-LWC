import { LightningElement, track } from 'lwc';

import PubSub from 'pubsub-js';
export default class OldQuries extends LightningElement {
    @track oldQueries = [
        { id: 0, query: 'select id from user', isFavorite: true },
        { id: 1, query: 'select id from child__c', isFavorite: false },
        { id: 2, query: 'select id from boat__c', isFavorite: true }
    ];

    connectedCallback() {
        this.oldQueries = this.oldQueries.map((el) => {
            return {
                variant: el.isFavorite ? 'brand' : 'border-filled',
                el
            };
        });

        console.log('this.oldQueries', this.oldQueries);

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
