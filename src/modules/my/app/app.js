/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
import { LightningElement, track } from 'lwc';
import { getSobjectList } from 'my/Utils';
import { getValue } from 'my/stateManager';
export default class App extends LightningElement {
    @track showBody = false;
    deletemeLater = [
        'jazz1',
        'rock2',
        'song3',
        'sfdc4',
        'superman5',
        'joker6',
        'rust7'
    ];
    handleOrgChange() {
        if (getValue('selectIndex') !== -1) {
            getSobjectList();
            this.showBody = true;
        }
    }

    // getSobjectList() {
    //     let index = getValue('selectIndex');
    //     let org = getValue('idToOrgObj')[index];
    //     fireRest2(org.domain, 'sobjects/', org.value).then((response) => {
    //         setValue('sobjectList', response.sobjects);
    //     });
    // }

    showselected(event) {
        console.log('u chose ', event.detail);
    }
}
