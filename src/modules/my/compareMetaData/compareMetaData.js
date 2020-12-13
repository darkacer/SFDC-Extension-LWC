import { LightningElement } from 'lwc';
// import { getValue, setValue } from 'my/stateManager';
import { makeQueryAll } from 'my/Utils';

export default class CompareMetaData extends LightningElement {
    showQueryBuilder = false;
    truthy = true;
    orgToQuery = [];

    bothSelected(event) {
        console.log('you selected  2 ! = ', JSON.stringify(event.detail));
        if (event.detail.length === 2) {
            this.showQueryBuilder = true;
            this.orgToQuery = event.detail;
            // {index, value, domain}
        } else {
            this.showQueryBuilder = false;
            /**
             * send out message here that exactly 2 are requried!
             */
        }
    }

    queryReady(event) {
        console.log('query is ', event.detail);
        let query = event.detail.query;
        //let key = event.detail.key;

        console.log(
            'before making dual query ',
            this.orgToQuery[0],
            this.orgToQuery[0].domain
        );
        Promise.all([
            makeQueryAll(
                JSON.parse(this.orgToQuery[0]).domain,
                JSON.parse(this.orgToQuery[0]).value,
                query
            ),
            makeQueryAll(
                JSON.parse(this.orgToQuery[1]).domain,
                JSON.parse(this.orgToQuery[1]).value,
                query
            )
        ]).then((response) => {
            console.log('response is ', JSON.stringify(response));
        });
        // makeQueryAll(query)
        // .then(response => {
        //     console.log()
        // })
    }
}
