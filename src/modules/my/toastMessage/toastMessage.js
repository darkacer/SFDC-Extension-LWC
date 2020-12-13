import { LightningElement, api } from 'lwc';
const closeTimeMiliSec = 10000;

export default class ToastMessage extends LightningElement {
    @api messageType = 'error';
    @api message = 'Your dev forgot to put message here';
    @api detail = 'your dev forgot to put details here';

    connectedCallback() {
        setTimeout(() => this.closeMessage(), closeTimeMiliSec);
    }

    get iconClass() {
        return (
            'slds-icon_container slds-icon-utility-' +
            this.messageType +
            ' slds-m-right_small slds-no-flex slds-align-top'
        );
    }

    get theme() {
        return 'slds-notify slds-notify_toast slds-theme_' + this.messageType;
    }

    get buttonClass() {
        return 'SLDS/icons/utility-sprite/svg/symbols.svg#' + this.messageType;
    }

    get closeButton() {
        return 'SLDS/icons/utility-sprite/svg/symbols.svg#close';
    }

    closeMessage() {
        this.dispatchEvent(new CustomEvent('close'));
    }
}
