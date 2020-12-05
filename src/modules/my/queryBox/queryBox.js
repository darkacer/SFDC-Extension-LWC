import { LightningElement, api, track } from 'lwc';
import { makeQuery, getSobjectList, getSobjectFieldList } from 'my/Utils';
import { getValue } from 'my/stateManager';

export default class QueryBox extends LightningElement {
    query = '';
    key = '';
    toolingQuery = false;
    isQueryButtonDisabled = false;
    @api showKey = false;

    @track records = [];
    @track sobjectListFormat;
    @track sObjectFieldList = [];

    get isMetaDataVisible() {
        return this.sobjectListFormat && this.sobjectListFormat.length;
    }

    getMetaData() {
        getSobjectList();
        this.getsobjectListFormat();
        this.resetDropDown(this.sobjectListFormat, 0);
    }

    resetDropDown(array, id) {
        let dropdowncmp = this.template.querySelectorAll(
            'basecomp-drop-down-filter'
        )[id];
        if (dropdowncmp) dropdowncmp.resetOptions(array);
    }

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
            this.isQueryButtonDisabled = false;
        });
        this.isQueryButtonDisabled = true;
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

    handleClick() {
        console.log('you clicked! ');
    }

    onobjectselect(event) {
        console.log('u chose ', event.detail);
        if (event.detail) {
            getSobjectFieldList(event.detail.split(' - ')[1]).then(
                (response) => {
                    // console.log(response)
                    let arr = response.fields;
                    this.sObjectFieldList = [
                        ...arr.map((el) => el.label + ' - ' + el.name)
                    ];
                    this.resetDropDown(this.sObjectFieldList, 1);
                }
            );
        }
        // console.log('tempArr => ', tempArr)
        // this.sObjectFieldList = [...tempArr]
        // console.log('this sObjectFieldList', this.sObjectFieldList)
    }

    onFieldSelect(event) {
        console.log(event.detail);
    }

    getsobjectListFormat() {
        let tempVal = getValue('sobjectList');
        tempVal = tempVal.map((el) => el.label + ' - ' + el.name);
        this.sobjectListFormat = [...tempVal];
    }
}
