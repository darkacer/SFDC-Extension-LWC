import { LightningElement, track } from 'lwc';
import { getOrgNames } from 'my/Utils';
import { setValue, getValue } from 'my/stateManager';

export default class OrgListComboBox extends LightningElement {
    @track rows = [];
    value;
    accessToken = '';
    orgUrl = '';

    connectedCallback() {
        let orgList = [];
        let idToOrgObj = {};
        let index = 0;
        getOrgNames((cookies) => {
            cookies.reverse().forEach((elem) => {
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
            console.log('rows', orgList);
            console.log('idToOrgObj', idToOrgObj);
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
        console.log('value', this.value);
        console.log(
            'value',
            this.rows.map((el) => el.value)
        );
        this.communicateOrgId();
    }

    accessTokenUpdated(event) {
        this.accessToken = event.detail.value;
    }
    orgUrlUpdated(event) {
        this.orgUrl = event.detail.value;
    }

    addOrg() {
        // check if orgUrl, accessToken are valid
        if (this.orgUrl && this.accessToken) {
            const orgObj = {
                index: this.rows.length,
                value: this.accessToken,
                domain: this.orgUrl,
                label: this.orgUrl
            };
            // this.rows.push(orgObj);
            this.rows = [...this.rows, orgObj];
            this.value = this.orgUrl;
            setValue('idToOrgObj', {
                ...getValue('idToOrgObj'),
                [this.rows.length - 1]: orgObj
            });
            setValue('selectIndex', this.rows.length - 1);
            this.communicateOrgId();
            console.log('rows', JSON.stringify(this.rows));
            console.log('idToOrgObj', getValue('idToOrgObj'));
        }
    }
}
