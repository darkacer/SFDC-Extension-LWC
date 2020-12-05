/* eslint-disable no-unused-vars */
import { LightningElement, track, api } from 'lwc';
import { getOrgNames, fireRest2 } from 'my/Utils';
import { setValue, getValue } from 'my/stateManager';

const selectedOrgs = {
    size: 1,
    queue: [],
    pushVal(elem) {
        for (let i = 0; i < this.size; i++) this.queue[i] = this.queue[i + 1];
        this.queue[this.size - 1] = elem;
    }
};

const isSingleMode = () => this.selectmax <= 1;

export default class OrgList extends LightningElement {
    @track rows = [];
    selectIndex = 0;
    @api selectmax = 1;
    // selectedOrgs = [0];
    // orgList = [];

    connectedCallback() {
        let orgList = [];
        let idToOrgObj = {};
        let index = 0;
        getOrgNames((cookies) => {
            cookies.forEach((elem) => {
                console.log('elem => ', JSON.stringify(elem));
                if (new RegExp('.*salesforce.com').test(elem.domain)) {
                    orgList.push({
                        index: index,
                        value: elem.value,
                        domain: elem.domain,
                        class: 'white'
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
            if (isSingleMode) {
                if (this.rows.length) {
                    this.rows[0].class = 'green';
                    setValue('selectIndex', 0);
                    selectedOrgs.pushVal(0);
                } else {
                    setValue('selectIndex', -1);
                }
                this.communicateOrgId();
            }
        });
    }

    communicateOrgId() {
        const evt = new CustomEvent('orgidset');
        this.dispatchEvent(evt);
    }

    handleOrgSelect(event) {
        let index = event.target.dataset.index;
        this.selectIndex = index;
        this.rows.forEach((el) => {
            el.class = 'white';
        });
        this.rows[index].class = 'green';
        setValue('selectIndex', this.selectIndex);
        this.communicateOrgId();
    }

    newHandleOrgSelect(event) {
        let index = event.target.dataset.index;
        selectedOrgs.pushVal(index);
        this.rows.forEach((el) => {
            el.class = 'white';
        });
        selectedOrgs.queue.forEach((el) => {
            this.rows[el].class = 'green';
        });

        if (isSingleMode) {
            setValue('selectIndex', index);
            this.communicateOrgId();
        }
    }

    setOrg(index) {
        let value = getValue('idToOrgObj')[index].value;
        let domain = getValue('idToOrgObj')[index].domain;

        fireRest2(domain, 'sobjects/', value).then((response) => {
            console.log('response =>', response.sobjects[0].name);
            setValue('sobjectList', response.sobjects);
        });
    }
}
