import { LightningElement } from 'lwc';
export default class RecordDetails extends LightningElement {
    inputValue = '';
    inputChange(event) {
        this.inputValue = event.target.value;
    }

    getRecordDetails() {
        console.log(JSON.stringify(this.inputValue));
    }
}
