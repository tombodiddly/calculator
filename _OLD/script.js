const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (nums) => nums.reduce((a, b) => a * b);
const power = (num1, num2) => num1 ** num2;
const divide = (num1, num2) => num1 != 0 && num2 != 0 ? num1 / num2: "ERR";

function operate(array){
    if(array[1] === '+'){
        //filter array to be only numbers
        array.filter(number =>{
            if(something here...){}

        })
        //then reduce array to add the numbers
        array.reduce((a, b) => a + b, 0);
    }else if(array[1] === '-'){
        return subtract(array[0],array[2]);
    }else if(array[1] === '*'){
        return multiply(array[0],array[2]);
    }else if(array[1] === '/'){
        return divide(array[0],array[2]);
    }
}

let value1;
let value2;
let operation;
//let calculation = [value1, operation, value2];
let calculation;

const displayValue = document.getElementById("displayValue");
//displayValue.textContent = "poop city";

const calcValue = document.getElementById("calc");


const numbers = document.querySelectorAll('button.number');
const numberArray = Array.from(numbers);
numberArray.forEach(
    number => number.addEventListener('click', numberOutput)
);
  
function numberOutput() {
    if(displayValue.textContent.length < 15){
        if(displayValue.textContent === '0'){
            displayValue.textContent = '';
        }
        displayValue.textContent += this.textContent;
    }
}




const operators = document.querySelectorAll('button.operator');
const operatorArray = Array.from(operators);
operatorArray.forEach(
    operator => operator.addEventListener('click', operatorOutput)
);

// function operatorOutput() {
//     value1 = displayValue.textContent;
//     operation = this.textContent;
//     displayValue.textContent = '';
// }

function operatorOutput() {
    if(value1 === undefined){
        value1 = displayValue.textContent;
        operation = this.textContent;
        displayValue.textContent = '';
        calcValue.textContent = value1 + ' ' + this.textContent;
    }else if(operation !== undefined){
        value2 = displayValue.textContent;
        displayValue.textContent = '';
        calculation = [value1, operation, value2];
        calcValue.textContent = calculation[0]+calculation[1]+calculation[2];
        displayValue.textContent = operate(calculation);
        value1 = displayValue.textContent;
        
        
    }
}
