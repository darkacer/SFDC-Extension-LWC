/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
import { LightningElement, track } from 'lwc';
import { getOrgNames } from 'my/Utils';
export default class App extends LightningElement {
    @track rows = [];
    idToOrgObj = [];

    connectedCallback() {
        getOrgNames((cookies) => {
            cookies.forEach((elem) => {
                if (new RegExp('.*salesforce.com').test(elem.domain)) {
                    this.idToOrgObj.push({
                        value: elem.value,
                        domain: elem.domain
                    });
                }
            });
            this.rows = [...this.idToOrgObj];
        });
    }
}
