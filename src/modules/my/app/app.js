/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
import { LightningElement, track } from 'lwc';
import { getOrgNames } from 'my/Utils';
import { getValue, setValue } from 'my/stateManager';
export default class App extends LightningElement {
    @track rows = [];
    selectIndex = 0;
    // idToOrgObj = [];

    connectedCallback() {
        let idToOrgObj = [];
        let index = 0;
        getOrgNames((cookies) => {
            cookies.forEach((elem) => {
                if (new RegExp('.*salesforce.com').test(elem.domain)) {
                    idToOrgObj.push({
                        index: index++,
                        value: elem.value,
                        domain: elem.domain,
                        class: 'white'
                    });
                }
            });
            this.rows = [...idToOrgObj];
            if (this.rows.length) this.rows[0].class = 'green';
        });

        setValue('sharedValue', 0);
    }

    handleOrgSelect(event) {
        let index = event.target.dataset.index;
        this.selectIndex = index;
        this.rows.forEach((el) => {
            el.class = 'white';
        });
        this.rows[index].class = 'green';
    }

    @track sharedValue = 0;

    refreshState() {
        this.sharedValue = getValue('sharedValue');
    }

    onincrease() {
        setValue('sharedValue', getValue('sharedValue') + 1);
    }
}
