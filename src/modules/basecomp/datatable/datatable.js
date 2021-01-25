/* eslint-disable @lwc/lwc/no-api-reassignments */
import { LightningElement, api, track } from 'lwc';
import { flattenObject } from '../../my/Utils/Utils';

// eslint-disable-next-line @lwc/lwc/no-leading-uppercase-api-name
export default class Datatable extends LightningElement {
    @track columns2 = [];
    @track finalData = [];
    @api newRecordList = [];
    @track recordList = [];

    connectedCallback() {
        this.recordList = [...this.newRecordList];
        this.processData2();
    }

    @api
    timepass(myarray) {
        this.newRecordList = [...myarray];
        this.processData2();
    }

    processData2() {
        // add zero rows check here
        if (this.newRecordList.length) {
            this.newRecordList = this.newRecordList.map((el) =>
                flattenObject(el)
            );
            this.generateColumnNames(this.newRecordList);
            this.convertData(JSON.stringify(this.newRecordList));
        }
        let count = 0;
        this.finalData = this.finalData.map((el) =>
            Object.assign({}, { array: el }, { _id: count++ })
        );
        this.finalData = [...this.finalData];
    }

    generateColumnNames(array) {
        let mySet = new Set();
        array.forEach((obj) => {
            mySet = new Set([...mySet, ...this.getNonNullKeys(obj)]);
        });
        this.columns2 = Array.from(mySet);
    }

    getNonNullKeys(obj) {
        return Object.keys(obj).filter(
            (el) => !(obj[el] == null || el.includes('attributes'))
        );
    }

    convertData(dataString) {
        let data = JSON.parse(dataString);
        this.finalData = [];
        data.forEach((row) => {
            let tempArr = [];
            this.columns2.forEach((col) => {
                tempArr.push(
                    row[col]
                        ? { id: col, value: row[col] }
                        : { id: col, value: '' }
                );
            });
            this.finalData.push(tempArr);
        });
    }
}
