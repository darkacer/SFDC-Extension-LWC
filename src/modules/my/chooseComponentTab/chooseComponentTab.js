import { LightningElement, track } from 'lwc';

export default class ChooseComponentTab extends LightningElement {
    // @track actions = ['Query Maker','Record Detail','Object Detail','Compare Metadata Detail']
    @track actions = [
        {
            id: 0,
            name: 'Query Maker',
            api: 'queryMaker'
        },
        {
            id: 1,
            name: 'Record Detail',
            api: 'recordDetail'
        },
        {
            id: 2,
            name: 'Object Detail',
            api: 'objectDetail'
        },
        {
            id: 3,
            name: 'Compare Metadata Detail',
            api: 'compareMetaData'
        },
        {
            id: 4,
            name: 'Old Queries',
            api: 'oldQuries'
        }
    ];
}
