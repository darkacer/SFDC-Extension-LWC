import { LightningElement, api, track } from 'lwc';
const MAXSIZE = 5;
export default class DropDownFilter extends LightningElement {
    @api options = [];
    inputStream = '';
    isFocused = false;
    selectedIndex = 0;

    @track tempOptions;
    @track filterOptions;
    connectedCallback() {
        let count = 0;
        this.tempOptions = this.options.map((el) => {
            return {
                // selected : false,
                value: el,
                selectedClass: !count++ ? 'selected' : ''
            };
        });
        count = 0;
        this.filterOptions = this.tempOptions.filter(() => {
            if (count < MAXSIZE) {
                count++;
                return true;
            }
            return false;
        });
    }

    focusOff() {
        this.isFocused = false;
    }

    focusOn() {
        this.isFocused = true;
    }

    handleKeyUp(event) {
        this.focusOn();
        //Enter key
        if (event.keyCode === 13) {
            this.inputStream = this.filterOptions[this.selectedIndex].value;
            this.focusOff();
            return;
        }
        //Escape key
        if (event.keyCode === 27) this.focusOff();

        if (!(event.keyCode === 40 || event.keyCode === 38))
            this.selectedIndex = 0;

        this.inputStream = event.target.value;
        if (event.keyCode === 40)
            if (this.selectedIndex < this.filterOptions.length - 1)
                this.selectedIndex++;
        if (event.keyCode === 38) if (this.selectedIndex) this.selectedIndex--;
        let count = 0;
        this.filterOptions = this.tempOptions.filter((el) => {
            if (count < MAXSIZE && el.value.includes(this.inputStream)) {
                count++;
                return true;
            }
            return false;
        });
        count = 0;

        this.filterOptions = this.filterOptions.map((el) => {
            el.selectedClass = this.selectedIndex === count++ ? 'selected' : '';
            return el;
        });
    }

    handleSelect(event) {
        this.inputStream = event.currentTarget.dataset.value;
    }
    mouseOver(event) {
        console.log('mouse over' + event.currentTarget.dataset.value);
    }
}
