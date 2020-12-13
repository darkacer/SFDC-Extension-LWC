import { LightningElement, track } from 'lwc';
import { getOrgNames } from 'my/Utils';
import PubSub from 'pubsub-js';

export default class DualOrgSelect extends LightningElement {
    _selected = [];
    @track orgList = [];

    connectedCallback() {
        let index = 0;
        getOrgNames((cookies) => {
            cookies.forEach((elem) => {
                console.log('elem => ', JSON.stringify(elem));
                if (new RegExp('.*salesforce.com').test(elem.domain)) {
                    this.orgList.push({
                        index: index,
                        value: elem.value,
                        domain: elem.domain
                    });
                    index++;
                }
            });
            console.log('orgList ', JSON.stringify(this.orgList));

            if (this.orgList.length >= 2) {
                PubSub.publish('customException', {
                    message: 'You are signed in to 2 or more orgs',
                    type: 'success',
                    details: 'Select your orgs from the multi-select picklist'
                });
            }
        });
    }

    renderedCallback() {
        console.log('no of orgs ', this.orgList.length);
        if (this.orgList.length < 2) {
            PubSub.publish('customException', {
                message: 'Not signed in to enough orgs',
                type: 'error',
                details: 'You need atleast two orgs to use this function'
            });
        }
    }

    get options() {
        return this.orgList.map((el) => {
            return {
                label: el.domain,
                value: JSON.stringify(el)
            };
        });
    }

    get selected() {
        return this._selected.length ? this._selected : 'none';
    }

    get areTwoSelected() {
        return this._selected.length === 2;
    }

    handleChange(e) {
        this._selected = e.detail.value;
    }
}
