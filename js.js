class Calculator {
    constructor(prevText, currentText) {
        this.prevText = prevText;
        this.currentText = currentText;
        this.clear();
    }
    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    delete() {

    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    chooseOperation(operation) {

    }
    compute() {

    }
    updateDisplay() {
        this.currentText.innerText = this.currentOperand;
    }
}
const numberButtons = document.querySelectorAll(`[data-number]`);
const operationButtons = document.querySelectorAll(`[data-operation]`);
const allClearBtn = document.querySelectorAll(`[data-allClear]`);
const deleteBtn = document.querySelector(`[data-delete]`);
const equalsBtn = document.querySelectorAll(`[data-equals]`);
const prevText = document.querySelector(`[data-prev]`);
const currentText = document.querySelector(`[data-current]`);

const calculator = new Calculator(prevText, currentText)
console.log(calculator);
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button)
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
})

