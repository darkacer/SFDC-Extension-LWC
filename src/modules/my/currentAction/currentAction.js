/* eslint-disable consistent-return */
/* eslint-disable default-case */
import { LightningElement, api, track } from 'lwc';
import queryMaker from './queryMaker.html';
import objectDetail from './objectDetail.html';
import recordDetail from './recordDetail.html';
import compareMetaData from './compareMetaData.html';
// import oldQuries from './oldQuries.html';

import { getValue } from 'my/stateManager';

export default class CurrentAction extends LightningElement {
    @api pageType = '';

    @track sobjectList = [];
    @track records = [];

    truthy = true;
    falsy = false;

    get sobjectNames() {
        return this.sobjectList.map((el) => {
            return Object.assign({}, el, { value: el.label + '-' + el.name });
        });
    }

    render() {
        switch (this.pageType) {
            case 'queryMaker':
                return queryMaker;
            case 'objectDetail':
                return objectDetail;
            case 'recordDetail':
                return recordDetail;
            case 'compareMetaData':
                return compareMetaData;
            // case 'oldQuries':
            //     return oldQuries;
            default:
                return '';
        }
    }

    connectedCallback() {
        this.getSobjectList();
    }

    getSobjectList() {
        console.log('inside get sobjectlist');
        this.sobjectList = getValue('sobjectList');
        for (let i = 0; i < 10; i++) {
            console.log(JSON.stringify(this.sobjectList[i]));
        }
    }

    onobjectselect(event) {
        console.log('you selected = ', event.detail);
    }
}
