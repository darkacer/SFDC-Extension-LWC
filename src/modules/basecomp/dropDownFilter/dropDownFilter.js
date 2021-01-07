import { LightningElement, api, track } from 'lwc';
// const MAXSIZE = 5;
export default class DropDownFilter extends LightningElement {
    @api options = [];
    @api inputLabel = 'mylabel';
    @api maxSize = 5;
    inputStream = '';
    isFocused = false;
    selectedIndex = 0;

    falsy = false;

    @track tempOptions;
    @track filterOptions;

    @api
    resetOptions(array) {
        this.tempOptions = this.generateTempOpt([...array]);
    }
    generateTempOpt(arr) {
        let count = 0;
        return arr.map((el) => {
            return {
                // selected : false,
                value: el,
                selectedClass: !count++ ? 'selected' : ''
            };
        });
    }
    connectedCallback() {
        // MAXSIZE = this.maxSize
        let count = 0;
        this.tempOptions = this.generateTempOpt(this.options);
        this.filterOptions = this.tempOptions.filter(() => {
            if (count < this.maxSize) {
                count++;
                return true;
            }
            return false;
        });
    }

    focusOffUI() {
        // this.focusOff(false)
        this.isFocused = false;
    }

    focusOff(append) {
        this.isFocused = false;
        // Dispatches the event.
        this.dispatchEvent(
            new CustomEvent('finalselect', {
                detail: {
                    input: this.inputStream,
                    append: append
                }
            })
        );
        console.log('event dispatched!', append);
    }

    clicked(event) {
        this.inputStream = event.currentTarget.dataset.value;
        this.focusOff(false);
    }

    focusOn() {
        this.isFocused = true;
    }

    handleKeyUp(event) {
        this.focusOn();
        console.log('key pressed is = ', event.keyCode);
        //Enter key
        if (event.keyCode === 13) {
            this.inputStream = this.filterOptions[this.selectedIndex].value;
            this.focusOff(true);
            return;
        }
        //Escape key
        if (event.keyCode === 27) this.focusOff(false);

        if (event.keyCode === 40 || event.keyCode === 38)
            event.preventDefault();
        if (!(event.keyCode === 40 || event.keyCode === 38))
            this.selectedIndex = 0;

        this.inputStream = event.target.value;
        console.log('input stream is ', this.inputStream);
        if (event.keyCode === 40)
            if (this.selectedIndex < this.filterOptions.length - 1)
                this.selectedIndex++;
        if (event.keyCode === 38) if (this.selectedIndex) this.selectedIndex--;
        let count = 0;
        this.filterOptions = [];
        this.filterOptions = this.tempOptions.filter((el) => {
            if (
                count < this.maxSize &&
                el.value.toLowerCase().includes(this.inputStream.toLowerCase())
            ) {
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
