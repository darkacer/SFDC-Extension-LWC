import { LightningElement, track } from 'lwc';
import { getOrgNames } from 'my/Utils';

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
        });
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
