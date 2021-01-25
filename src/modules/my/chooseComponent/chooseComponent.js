import { LightningElement, track } from 'lwc';
import { getValue, setValue } from 'my/stateManager';

export default class ChooseComponent extends LightningElement {
    a = 1 / 0;
    @track actions = [
        {
            id: 0,
            name: 'Query Maker',
            api: 'queryMaker',
            show: true,
            classname: 'tabcontent active',
            buttClass: 'tablinks active'
        },
        {
            id: 1,
            name: 'Record Detail',
            api: 'recordDetail',
            show: false,
            classname: 'tabcontent',
            buttClass: 'tablinks'
        },
        {
            id: 2,
            name: 'Object Detail',
            api: 'objectDetail',
            show: false,
            classname: 'tabcontent',
            buttClass: 'tablinks'
        },
        {
            id: 3,
            name: 'Compare Metadata Detail',
            api: 'compareMetaData',
            show: false,
            classname: 'tabcontent',
            buttClass: 'tablinks'
        }
    ];
    currentAction = '';

    openAction(event) {
        this.actions.forEach((el) => {
            el.show = false;
            el.classname = el.classname.replace(' active', '');
            el.buttClass = el.buttClass.replace(' active', '');
        });
        this.actions[event.target.dataset.index].show = true;
        this.actions[event.target.dataset.index].classname += ' active';
        this.actions[event.target.dataset.index].buttClass += ' active';

        this.actions = [...this.actions];
        this.currentAction = this.actions[event.target.dataset.index].api;
    }

    ondecrease() {
        setValue('sharedValue', getValue('sharedValue') - 1);
    }
}
