/* eslint-disable no-return-assign */
import { LightningElement, track } from 'lwc';
import { getValue } from 'my/stateManager';
import { getSobjectFieldList } from 'my/Utils';
const unwantedSuffixes = ['ChangeEvent', 'History', '__Share'];
const keysOrderBy = new Set([
    'label',
    'name',
    'inlineHelpText',
    'picklistValues',
    'type',
    'relationshipName',
    'defaultValue',
    'defaultValueFormula',
    'referenceTo'
]);
const unwantedSuffixFinder = (name) =>
    !unwantedSuffixes.some((el) => name.endsWith(el));

const stringifyObjectValues = (object) => {
    return Object.keys(object).reduce((previous, next) => {
        previous[next] = JSON.stringify(object[next]);
        return previous;
    }, {});
};

export default class ObjectDetail extends LightningElement {
    @track sobjectNames = [];
    @track records = [];
    @track columns = [];
    sobjectnameApiName;
    isbuttondisabled = false;

    connectedCallback() {
        let tempVal = getValue('sobjectList');
        // console.log(JSON.stringify(tempVal));
        tempVal = tempVal
            .map((el) => el.label + ' - ' + el.name)
            .filter((el) => unwantedSuffixFinder(el));
        // console.log('after filter', JSON.stringify(tempVal));
        this.sobjectNames = [...tempVal];
    }

    objectSelected(event) {
        console.log(event.detail);
        this.sobjectnameApiName = event.detail.input.split(' - ')[1];
        //this.callSObjectApi(sobjectnameApiName)
    }

    describeSobject() {
        if (this.sobjectnameApiName)
            this.callSObjectApi(this.sobjectnameApiName);
    }

    callSObjectApi(sobjectname) {
        getSobjectFieldList(sobjectname).then((response) => {
            if (response && response.fields) {
                this.records = response.fields.map((el) =>
                    stringifyObjectValues(el)
                );
                Object.keys(response.fields[0]).forEach((el) =>
                    keysOrderBy.add(el)
                );

                this.columns = [...keysOrderBy];

                let datatble = this.template.querySelectorAll(
                    'basecomp-datatable-wrapper'
                )[0];

                if (datatble) datatble.clearTable();

                if (datatble)
                    datatble.updateDataPresetColumns(
                        this.columns,
                        this.records
                    );
            }
            this.isbuttondisabled = false;
        });
        this.isbuttondisabled = true;
    }
}
