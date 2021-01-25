import { LightningElement, track } from 'lwc';
import PubSub from 'pubsub-js';
import { getRecordDetail, removeAttributes } from 'my/Utils';
export default class RecordDetails extends LightningElement {
    inputValue = '';
    inputChange(event) {
        this.inputValue = event.target.value;
    }
    @track recordData = [];
    @track columns = [];

    getRecordDetails() {
        if (this.inputValue.split('/').length === 2) {
            let sobjectName = this.inputValue.split('/')[0];
            let recordId = this.inputValue.split('/')[1];
            getRecordDetail(sobjectName, recordId).then((response) => {
                if ('Id' in response) {
                    let recDetail = removeAttributes(response);
                    this.recordData = Object.entries(recDetail).map((el) => {
                        return {
                            key: el[0],
                            value: el[1]
                        };
                    });
                    this.columns = ['key', 'value'];

                    let datatble = this.template.querySelectorAll(
                        'basecomp-datatable-wrapper'
                    )[0];

                    if (datatble) datatble.clearTable();

                    if (datatble) {
                        datatble.updateDataPresetColumns(
                            this.columns,
                            this.recordData
                        );
                    }
                }
            });
        } else {
            PubSub.publish('customException', {
                message: 'Check input format',
                type: 'error',
                details: 'Input format must be "Account/001XXXXXXXXXXXXABC"'
            });
        }
    }
}
