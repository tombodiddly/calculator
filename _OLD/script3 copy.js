let value1;
let value2;
let operation;
let calculation = [];
let nums;

function operate(array){
    //filter array to be only numbers
    nums = array.filter(item => !isNaN(item) ? true : false);
    if(array[1] === '+'){
        return nums.reduce((a, b) => a + b, 0);
    }else if(array[1] === '-'){
        return nums.reduce((a, b) => a - b);
    }else if(array[1] === 'x'){
        return nums.reduce((a, b) => a * b, 1);
    }else if(array[1] === '÷'){
        return nums.reduce((a, b) => a != 0 && b != 0 ? a / b: "ERR");
    }
}

const displayValue = document.getElementById("displayValue");
displayValue.textContent = '0';

const calcValue = document.getElementById("calc");


const numbers = document.querySelectorAll('button.number');
const numberArray = Array.from(numbers);
numberArray.map(number => number.addEventListener('click', numberOutput));
  
function numberOutput() {
    if(operation !== undefined){
        if(displayValue.textContent.length < 15){
            if(displayValue.textContent === value1){
                displayValue.textContent = '';
            }
            displayValue.textContent += this.textContent;
            value2 = Number(displayValue.textContent);
        }

    }else{
        if(displayValue.textContent.length < 15){
            if(displayValue.textContent === '0'){
                displayValue.textContent = '';
            }
            displayValue.textContent += this.textContent;
        }
    }
    
}

const operators = document.querySelectorAll('button.operator');
const operatorArray = Array.from(operators);
operatorArray.map(operator => operator.addEventListener('click', operatorInput));
  
function operatorInput() {
    if(value1 === undefined){
        value1 = Number(displayValue.textContent);
        operation = this.textContent;
        calcValue.textContent = value1 + ' ' + this.textContent;
        displayValue.textContent = '';
    }if(operation !== undefined && value2 !== undefined){
        calculation = [value1, operation, value2];
        calcValue.textContent = `${calculation[0]} ${calculation[1]} ${calculation[2]}`;
        displayValue.textContent = operate(calculation);
    }   
}


