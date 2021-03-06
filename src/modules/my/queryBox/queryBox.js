import { LightningElement, api, track } from 'lwc';
import { makeQuery, getSobjectList, getSobjectFieldList } from 'my/Utils';
import { getValue } from 'my/stateManager';
import PubSub from 'pubsub-js';
export default class QueryBox extends LightningElement {
    query = '';
    key = '';
    toolingQuery = false;
    isQueryButtonDisabled = false;
    @api showKey = false;

    @track records = [];
    @track sobjectListFormat;
    @track sObjectFieldList = [];

    connectedCallback() {
        PubSub.subscribe('queryCopy', (msg, data) => {
            this.query = data.query;
        });
    }

    get showBelowOperative() {
        return false;
    }

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
        // in compare mode just create your query and leave
        if (this.showKey) {
            this.dispatchEvent(
                new CustomEvent('querybuilt', {
                    detail: {
                        query: this.query,
                        key: this.key,
                        isTooling: this.toolingQuery
                    }
                })
            );
            return;
        }
        makeQuery(this.query).then((response) => {
            let datatble = this.template.querySelectorAll(
                'basecomp-datatable-wrapper'
            )[0];

            /**
             * clear out child datatable components results before dumping new ones
             * DONE!
             */

            if (datatble) datatble.clearTable();

            if (response.done && response.totalSize) {
                this.records = [...response.records];
                if (datatble) datatble.updateData(this.records);

                PubSub.publish('querySave', {
                    query: this.query,
                    recordLength: this.records.length,
                    orgName: getValue('idToOrgObj')[getValue('selectIndex')]
                        .domain,
                    queryDate: new Date(),
                    displayName:
                        this.records.length +
                        ' Records ' +
                        new Date().toLocaleString() +
                        ' ' +
                        getValue('idToOrgObj')[getValue('selectIndex')].domain
                });
            } else if (response.records && !response.totalSize) {
                PubSub.publish('customException', {
                    message: 'Try a different Where Clause',
                    type: 'error',
                    details: 'No Rows present for the given query'
                });
            } else {
                PubSub.publish('customException', {
                    message:
                        'Something is wrong with the query ' +
                        response[0].errorCode,
                    type: 'error',
                    details: response[0].message
                });
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

    handleClick() {}

    onobjectselect(event) {
        if (event.detail.input) {
            getSobjectFieldList(event.detail.input.split(' - ')[1]).then(
                (response) => {
                    let arr = response.fields;
                    this.sObjectFieldList = [
                        ...arr.map((el) => el.label + ' - ' + el.name)
                    ];
                    this.resetDropDown(this.sObjectFieldList, 1);
                }
            );
        }
        if (event.detail.append) this.appendToQuery(event.detail.input);
    }

    onFieldSelect(event) {
        if (event.detail.append) this.appendToQuery(event.detail.input + ', ');
    }

    getsobjectListFormat() {
        let tempVal = getValue('sobjectList');
        tempVal = tempVal.map((el) => el.label + ' - ' + el.name);
        this.sobjectListFormat = [...tempVal];
    }

    appendToQuery(string) {
        this.query += string.split(' - ')[1] + ' ';
    }
}
