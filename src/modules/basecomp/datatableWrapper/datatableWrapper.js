/* eslint-disable @lwc/lwc/no-api-reassignments */
import { LightningElement, api, track } from 'lwc';
import { flattenObject, convertToCSV } from '../../my/Utils/Utils';

let colSet = new Set();
// eslint-disable-next-line @lwc/lwc/no-leading-uppercase-api-name
export default class DatatableWrapper extends LightningElement {
    @api fullData = [];
    @track tempdata = [];
    @track columns = [];

    defaultSortDirection = 'asc';
    sortDirection = 'asc';
    sortedBy;

    connectedCallback() {
        console.log('fulldata ', JSON.stringify(this.fullData));
        this.processData();
    }

    @api
    updateData(myarray) {
        this.fullData = [...myarray];
        this.processData();
    }

    @api
    clearTable() {
        this.fullData = [];
        this.processData();
        colSet.clear();
    }

    get tempColumns() {
        return this.columns.map((el) => {
            return {
                label: el,
                fieldName: el,
                sortable: true
            };
        });
    }

    processData() {
        // add zero rows check here
        if (this.fullData.length) {
            this.fullData = this.fullData
                .map((el) => flattenObject(el))
                .map((el) => this.removeAttributes(el));

            this.tempdata = [...this.fullData];
            console.log('this.tempdata', this.tempdata);
        } else {
            this.tempdata = [];
        }
    }

    // removes attributes and gathers possoble columnnames
    removeAttributes(element) {
        //let colSet = new Set()
        let tempObj = {};
        for (const iterator in element) {
            if (!iterator.includes('attributes')) {
                tempObj[iterator] = element[iterator];
                colSet.add(iterator);
            }
        }
        this.columns = [...colSet];
        return tempObj;
    }

    // Used to sort the 'Age' column
    sortBy(field, reverse, primer) {
        const key = primer
            ? function (x) {
                  return primer(x[field]);
              }
            : function (x) {
                  return x[field];
              };

        return function (a, b) {
            a = key(a);
            b = key(b);
            return reverse * ((a > b) - (b > a));
        };
    }

    onHandleSort(event) {
        console.log(event.detail);
        const { fieldName: sortedBy, sortDirection } = event.detail;
        const cloneData = [...this.tempdata];

        cloneData.sort(this.sortBy(sortedBy, sortDirection === 'asc' ? 1 : -1));
        this.tempdata = cloneData;
        this.sortDirection = sortDirection;
        this.sortedBy = sortedBy;
    }

    copyText() {
        // let copyText = JSON.stringify(this.tempdata);

        var myWindow = window.open('', '', 'width=400,height=500');
        let string = convertToCSV(this.tempdata);
        console.log(string);
        myWindow.document.write(string);
        // copyText.select();
        // // this.copyText.setSelectionRange(0, 99999); /* For mobile devices */

        // document.execCommand("copy");
    }
}
