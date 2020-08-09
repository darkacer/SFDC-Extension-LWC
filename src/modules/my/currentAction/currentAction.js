/* eslint-disable consistent-return */
/* eslint-disable default-case */
import { LightningElement, api } from 'lwc';
import queryMaker from './queryMaker.html';
import objectDetail from './objectDetail.html';
import recordDetail from './recordDetail.html';
import compareMetaData from './compareMetaData.html';

export default class CurrentAction extends LightningElement {
    @api pageType = '';

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
            default:
                return '';
        }
    }
}
