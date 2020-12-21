import { LightningElement, track } from 'lwc';
import { getOrgNames } from 'my/Utils';
import { setValue } from 'my/stateManager';

export default class OrgListComboBox extends LightningElement {
    @track rows = [];
    value;

    connectedCallback() {
        let orgList = [];
        let idToOrgObj = {};
        let index = 0;
        getOrgNames((cookies) => {
            cookies.forEach((elem) => {
                if (
                    new RegExp('.*salesforce.com').test(elem.domain) &&
                    elem.hostOnly
                ) {
                    orgList.push({
                        index: index,
                        value: elem.value,
                        domain: elem.domain,
                        label: elem.domain
                    });
                    idToOrgObj[index] = {
                        value: elem.value,
                        domain: elem.domain
                    };
                    index++;
                }
            });
            setValue('idToOrgObj', idToOrgObj);
            this.rows = [...orgList];

            if (this.rows.length) {
                this.value = this.rows[0].value;
                setValue('selectIndex', 0);
            } else {
                setValue('selectIndex', -1);
            }
            this.communicateOrgId();
        });
    }

    communicateOrgId() {
        const evt = new CustomEvent('orgidset');
        this.dispatchEvent(evt);
    }

    handleChange(event) {
        this.value = event.detail.value;
        setValue(
            'selectIndex',
            this.rows.map((el) => el.value).indexOf(this.value)
        );
        this.communicateOrgId();
    }
}
