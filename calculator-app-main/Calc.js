const  toggle = document.querySelector('.toggle-switch');
const ball = document.querySelector('.ball-toggle');
const body = document.querySelector('.body')
const firstSwitch = document.querySelector('.switch')
const titleSWitch = document.querySelector('.title-switch')
const display = document.querySelector('.display')
const keyPad = document.querySelector('.keypad')
const keys = document.querySelectorAll('.key')
const del  = document.querySelector('.del')
const  reset = document.querySelector('.reset')
const equality = document.querySelector('.equality')
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const resetButton = document.querySelector('[data-reset]')
const equalsButton = document.querySelector('[data-equals]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const  currentOperandTextElement = document.querySelector('[data-current-operand]')




class Calculator {
    constructor( previousOperandTextElement,  currentOperandTextElement ) {
        this. previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement =  currentOperandTextElement;
        this.reset()
    }

    compute() {
        let computation
        const prev = parseFloat( this.previousOperand );
        const current = parseFloat(  this.currentOperand );

        if( isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation =  prev + current;
                break;
             case '-':
                computation =   prev - current;
                break;
             case 'x':
                computation =     prev * current;
                break;
                case '/':
                computation =     prev / current;
                break;         
            default:
                return
        } 
        this.currentOperand = computation;
        this.previousOperand = '';
        this.operation = undefined;
       
    }


    appendNumber(number) {
        if( number === '.' && this.currentOperand.includes('.')) return 
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    chooseOperation(operation) {
        if( this.currentOperand === '' ) return
        if( this.previousOperand !== '' ) {
            this.compute()
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    reset() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('0'[0])); 
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay
        if(isNaN(integerDigits)) {
            integerDisplay = '';
        }else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText =this.getDisplayNumber( this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)}  ${this.operation}`
        }else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}




const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach( button => button.addEventListener( 'click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
} ))

operationButtons.forEach( button => button.addEventListener( 'click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
} ))


equalsButton.addEventListener( 'click', button => {
    calculator.compute()
    calculator.updateDisplay()
} )

resetButton.addEventListener( 'click', button => {
    calculator.reset()
    calculator.updateDisplay()
} )

deleteButton.addEventListener( 'click', button => {
    calculator.delete()
    calculator.updateDisplay()
} )

toggle.addEventListener( 'click', change,  );

function  change() {
    if (toggle.classList.toggle('white')) {
        ball.classList.toggle('white-ball');
        body.classList.toggle('white-body')
        firstSwitch.classList.toggle('white-num')
        titleSWitch.classList.toggle('white-text')
        display.classList.toggle('white-figure')
        keyPad.classList.toggle('white-keypad')
        keys.forEach( key => key.classList.toggle('white-key') )
        del.classList.toggle('del-key')
        reset.classList.toggle('reset-white')
        equality.classList.toggle('white-equality')
    }else if (toggle.classList.toggle('purple')) {
        ball.classList.toggle('purple-ball');
        ball.classList.remove('white-ball');
        body.classList.toggle('purple-body')
        firstSwitch.classList.toggle('purple-num')
        titleSWitch.classList.toggle('purple-text')
        display.classList.toggle('purple-figure')
        keyPad.classList.toggle('purple-keypad')
        keys.forEach( key => key.classList.toggle('purple-key') )
        del.classList.toggle('del-2-key')
        reset.classList.toggle('reset-purple')
        equality.classList.toggle('purple-equality')
    
    }else   {
        ball.classList.remove('white-ball')
        ball.classList.remove('purple-ball')
        body.classList.remove('purple-body')
        firstSwitch.classList.remove('purple-num')
        titleSWitch.classList.remove('purple-text')
        display.classList.remove('purple-figure')
        keyPad.classList.remove('purple-keypad')
        keys.forEach( key => key.classList.remove('purple-key') )
        del.classList.remove('del-2-key')
        reset.classList.remove('reset-purple')
        equality.classList.remove('purple-equality')
    }

} 