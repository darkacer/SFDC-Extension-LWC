import { LightningElement } from 'lwc';
import { getOrgUrls } from 'my/Utils';

export default class App extends LightningElement {
    connectedCallback() {
        console.log('getOrgUrls', getOrgUrls());
    }
}
