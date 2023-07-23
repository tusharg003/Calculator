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
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    compute() {
        let computation
        const prev = parseFloat(this.previousOperand);
        const curr = parseFloat(this.currentOperand);

        if (isNaN(prev) || isNaN(curr)) return;
        switch (this.operation) {
            case '+':
                computation = prev + curr;
                break;
            case '-':
                computation = prev - curr;
                break;
            case 'x':
                computation = prev * curr;
                break;
            case '/':
                computation = prev / curr;
                break;
            default: return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
    getDisplayNumber(number) {
        const stringNo = number.toString();
        const integerDigits = parseFloat(stringNo.split('.')[0])
        const decimalDigits = stringNo.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
        return floatNo.toLocaleString('en')
    }
    updateDisplay() {
        this.currentText.innerText = this.getDisplayNumber(this.currentOperand);

        if (this.operation != null) {
            this.prevText.textContent = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.prevText.textContent = ''
        }
    }
}
const numberButtons = document.querySelectorAll(`[data-number]`);
const operationButtons = document.querySelectorAll(`[data-operation]`);
const allClearBtn = document.querySelector(`[data-allClear]`);
const deleteBtn = document.querySelector(`[data-delete]`);
const equalsBtn = document.querySelector(`[data-equals]`);
const prevText = document.querySelector(`[data-prev]`);
const currentText = document.querySelector(`[data-current]`);

const calculator = new Calculator(prevText, currentText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay();
    })
})

equalsBtn.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})