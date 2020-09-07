import { LightningElement, api, track } from 'lwc';
import { makeQuery } from 'my/Utils';

export default class QueryBox extends LightningElement {
    query = '';
    key = '';
    toolingQuery = false;
    @track records = [];
    @api showKey = false;

    fireQuery() {
        makeQuery(this.query).then((response) => {
            console.log('query response is ', response);
            if (response.done) {
                this.records = [...response.records];
                this.records = [...this.records];
                let datatble = this.template.querySelectorAll(
                    'basecomp-datatable'
                )[0];
                if (datatble) datatble.timepass(this.records);
            }
        });
    }

    handleChange(event) {
        switch (event.currentTarget.dataset.name) {
            case 'query':
                this.query = event.target.value;
                break;
            case 'tooling':
                this.toolingQuery = !this.toolingQuery;
                break;
            case 'key':
                this.key = event.target.value;
                break;
            default:
                break;
        }
    }

    // fireEventToParent(recordData) {
    //     const evt= new CustomEvent('queryfire',
    //         {
    //             detail: {
    //                 records:recordData
    //             }
    //         }
    //     );
    //     this.dispatchEvent(evt);
    // }
}
