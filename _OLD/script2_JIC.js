let value1;
let value2;
let operation;
let calculation;
let calcNums;

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
            value2 = displayValue.textContent;
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
        value1 = displayValue.textContent;
        operation = this.textContent;
        calcValue.textContent = value1 + ' ' + this.textContent;
    }if(operation !== undefined){
        //value2 = displayValue.textContent;
        calculation = [value1, operation, value2];
        calcValue.textContent = `${calculation[0]} ${calculation[1]} ${calculation[2]}`;
        calcNums = calculation.filter(item=> !isNaN(item) ? true : false);
    }   
}


