import { LightningElement, track } from 'lwc';
// import { getValue, setValue } from 'my/stateManager';
import { makeQueryAll, flattenObject, removeAttributes } from 'my/Utils';
import { compareData } from 'my/UtilCompareData';

export default class CompareMetaData extends LightningElement {
    showQueryBuilder = false;
    truthy = true;
    orgToQuery = [];

    showDatatable = false;
    @track datatable0;
    @track datatable1;
    @track datatable2;

    bothSelected(event) {
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
        let query = event.detail.query;
        let key = event.detail.key;

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
            if (response[0].done && response[1].done) {
                // let records0 = removeAttributes(flattenObject(response[0].records))
                // let records1 = removeAttributes(flattenObject(response[1].records))

                let records0 = response[0].records
                    .map((el) => flattenObject(el))
                    .map((el) => removeAttributes(el));
                let records1 = response[1].records
                    .map((el) => flattenObject(el))
                    .map((el) => removeAttributes(el));
                // let records1 = response[1].records

                let tempObj = compareData(records0, records1, key);
                this.datatable0 = tempObj.datatable0;
                this.datatable1 = tempObj.datatable1;
                this.datatable2 = tempObj.datatable2;
                this.showDatatable = true;
            } else {
                console.log('something went wrong!');
            }
        });
    }
}
