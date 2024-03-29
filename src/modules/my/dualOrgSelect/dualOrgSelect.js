import { LightningElement, track } from 'lwc';
// import { getOrgNames } from 'my/Utils';
import { getValue } from 'my/stateManager';
import PubSub from 'pubsub-js';

export default class DualOrgSelect extends LightningElement {
    _selected = [];
    @track orgList = [];

    connectedCallback() {
        //let index = 0;
        /*
        getOrgNames((cookies) => {
            cookies.reverse().forEach((elem) => {
                if (
                    new RegExp('.*salesforce.com').test(elem.domain) &&
                    elem.hostOnly
                ) {
                    this.orgList.push({
                        index: index,
                        value: elem.value,
                        domain: elem.domain
                    });
                    index++;
                }
            });
            if (this.orgList.length >= 2) {
                PubSub.publish('customException', {
                    message: 'You are signed in to 2 or more orgs',
                    type: 'success',
                    details: 'Select your orgs from the multi-select picklist'
                });
            }
        });
        */
        let tempList = getValue('idToOrgObj');
        console.log('tempList', tempList);
        if (tempList) {
            for (const key in tempList) {
                if (Object.prototype.hasOwnProperty.call(tempList, key)) {
                    this.orgList.push({
                        index: key,
                        value: tempList[key].value,
                        domain: tempList[key].domain
                    });
                }
            }
        }

        if (this.orgList.length >= 2) {
            PubSub.publish('customException', {
                message: 'You are signed in to 2 or more orgs',
                type: 'success',
                details: 'Select your orgs from the multi-select picklist'
            });
        }
    }

    renderedCallback() {
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
        return this._selected.length ? this._selected : [];
    }

    // get areTwoSelected() {
    //     return this._selected.length === 2;
    // }

    handleChange(e) {
        this._selected = e.detail.value;
        //if(this.areTwoSelected)
        this.dispatchEvent(
            new CustomEvent('twoselect', { detail: this.selected })
        );
        // else
        //     this.dispatchEvent(new CustomEvent('twoselect', { detail: this.selected }));
    }
}
