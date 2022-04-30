window.onload = function () {
    //Calculator class
    //Has a constructor that takes all inputs and all the calculator functions
    class Calculator {
        constructor(prevOperandTextElement, currOperandTextElement) {
        this.prevOperandTextElement = prevOperandTextElement;
        this.currOperandTextElement = currOperandTextElement;
        this.clear();
        }
    
        //Empty the values on the display
        clear() {
            this.currOperand = '';
            this.prevOperand = '';
            this.operation = undefined;
        }
    
        //Determines what what will occure on the display
        appendNumber(number) {
            if (number === '.' && this.currOperand.includes('.')) {
                return;
            } 
            this.currOperand = this.currOperand.toString() + number.toString();
        }

        //Controls what happens everytime a user clicks on any operation
        chooseOperation(operation) {
            if (this.currOperand === '') {
                return;
            }
            if (this.prevOperand !== '') {
                this.compute();
            }
            this.operation = operation;
            this.prevOperand = this.currOperand;
            this.currOperand = '';
        }
    
        //Takes in values and display results
        compute() {
            let computation;
            const prev = parseFloat(this.prevOperand);
            const current = parseFloat(this.currOperand);

            if(isNaN(prev) || isNaN(current)) {
                return; 
            }

            switch (this.operation) {
                case '+':
                    computation = prev + current;
                    break;

                case '-':
                    computation = prev - current;
                    break;

                case '*':
                    computation = prev * current;
                    break;

                case '÷':
                    computation = prev / current;
                    break;

                default:
                    return;
            }

            this.currOperand = computation;
            this.operation = undefined;
            this.prevOperand = '';
        }
        
    
        getDisplayNumber(number) {
            const stringNumber = number.toString();
            const integerDigits = parseFloat(stringNumber.split('.')[0]);
            const decimalDigits = stringNumber.split('.')[1];

            let integerDisplay;
            if (isNaN(integerDigits)) {
                integerDisplay = '';
            } else {
                integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
            }

            if (decimalDigits != null) {
                return `${integerDisplay}.${decimalDigits}`;
            } else {
                return integerDisplay;
            }
        }
    
        //Update outputs 
        update() {
            this.currOperandTextElement.innerText = this.getDisplayNumber(this.currOperand);
            if (this.operation != null) {
                this.prevOperandTextElement.innerText = `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`;
            } else {
                this.prevOperandTextElement.innerText = '';
            }
        }
    }
    
    
    const keys = document.querySelectorAll('[data-keys]');
    const operationButtons = document.querySelectorAll('[data-operator]');
    const equals = document.querySelector('[data-equals]');         
    const clear = document.querySelector('[data-clear]');
    const prevOperandTextElement = document.querySelector('[data-previous-operand]');
    const currOperandTextElement = document.querySelector('[data-current-operand]');
    
    //Create a calculator
    const calculator = new Calculator(prevOperandTextElement, currOperandTextElement);
    
    //
    keys.forEach(button => {
        button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.update();
        })
    });

    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.update();
        })
    });

    equals.addEventListener('click', button => {
        calculator.compute();
        calculator.update();
    });

    clear.addEventListener('click', button => {
        calculator.clear();
        calculator.update();
    });
}
//I followed this video because I needed help
//https://www.youtube.com/watch?v=j59qQ7YWLxw\
//I did not copy and paste someone's else code
//Teh Peh, 4/20/2022 9:34PM