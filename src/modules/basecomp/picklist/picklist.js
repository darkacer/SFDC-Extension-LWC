/* eslint-disable @lwc/lwc/no-api-reassignments */
import { LightningElement, api } from 'lwc';
const areSame = (str, str2) => str === str2;

export default class Picklist extends LightningElement {
    @api picklistOptions;
    @api value;
    @api label;
    @api index;
    @api fieldApiName;

    connectedCallback() {
        let count = 0;
        if (this.picklistOptions)
            this.picklistOptions = this.picklistOptions.map((el) =>
                Object.assign(
                    {},
                    el,
                    { isSelected: areSame(el.value, this.value) },
                    { id: count++ }
                )
            );
        console.log(
            'inside base component picklist ',
            this.picklistOptions[3].value
        );
    }

    handleChange(event) {
        const selectedEvent = new CustomEvent('picklistchanged', {
            detail: {
                value: event.target.value,
                index: this.index,
                fieldApiname: this.fieldApiName
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(selectedEvent);
    }
}
