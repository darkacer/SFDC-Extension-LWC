/* eslint-disable guard-for-in */
/* eslint-disable vars-on-top */
import { LightningElement } from 'lwc';
import { getSobjectList } from 'my/Utils';
import { getValue } from 'my/stateManager';
import PubSub from 'pubsub-js';

export default class App extends LightningElement {
    showToast = false;
    toastMessage = '';
    toastDetails = '';
    toastMessageType = 'error';

    showBody = false;
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

    connectedCallback() {
        PubSub.subscribe('customException', (msg, data) => {
            this.showToast = true;
            this.toastMessage = data.message;
            this.toastDetails = data.details;
            this.toastMessageType = data.type;
        });
    }

    showselected() {}

    closeToast() {
        this.showToast = false;
    }
}
