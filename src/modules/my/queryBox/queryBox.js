import { LightningElement } from 'lwc';

export default class QueryBox extends LightningElement {
    query;
    key;
    toolingQuery = false;

    fireQuery() {
        console.log('this query ', this.query);
    }

    handleChange(event) {
        console.log(event.currentTarget.dataset.name);
        switch (event.currentTarget.dataset.name) {
            case 'query':
                this.query = event.target.value;
                break;
            case 'tooling':
                this.toolingQuery = event.target.value;
                break;
            case 'key':
                this.key = event.target.value;
                break;

            default:
                break;
        }
    }
}
