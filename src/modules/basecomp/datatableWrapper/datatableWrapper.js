/* eslint-disable @lwc/lwc/no-api-reassignments */
import { LightningElement, api, track } from 'lwc';
// import { flattenObject } from '../../my/Utils/Utils';

// eslint-disable-next-line @lwc/lwc/no-leading-uppercase-api-name
export default class DatatableWrapper extends LightningElement {
    @api fullData = [];
    @track tempdata = [];
    @track columns = [];

    connectedCallback() {
        console.log('fulldata ', JSON.stringify(this.fullData));
    }
}
