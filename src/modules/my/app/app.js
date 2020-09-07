/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
import { LightningElement, track } from 'lwc';
import { fireRest2 } from 'my/Utils';
import { getValue, setValue } from 'my/stateManager';
export default class App extends LightningElement {
    @track showBody = false;

    handleOrgChange() {
        if (getValue('selectIndex') !== -1) {
            this.getSobjectList();
            this.showBody = true;
        }
    }

    getSobjectList() {
        let index = getValue('selectIndex');
        let org = getValue('idToOrgObj')[index];
        fireRest2(org.domain, 'sobjects/', org.value).then((response) => {
            setValue('sobjectList', response.sobjects);
        });
    }
}
