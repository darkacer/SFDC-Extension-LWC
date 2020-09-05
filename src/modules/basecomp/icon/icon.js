/* eslint-disable @lwc/lwc/no-api-reassignments */
import { LightningElement, api, track } from 'lwc';
export default class Icon extends LightningElement {
    @track link;
    @api iconName;
    @api size;
    connectedCallback() {
        this.iconName = this.iconName.replace(':', '/');
        this.link = './SLDS/icons/' + this.iconName;
    }
}
