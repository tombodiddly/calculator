//main variable declarations
let value1;
let value2;
let operation;
let calculation = [];
let nums;

//mathematical operations
function operate(array){
    //filter array to be only numbers
    nums = array.filter(item => !isNaN(item) ? true : false);
    if(array[1] === '+'){
        answer = (nums.reduce((a, b) => a + b, 0)).toPrecision(15);
        return parseFloat(answer);
    }else if(array[1] === '-'){
        answer = (nums.reduce((a, b) => a - b)).toPrecision(15)
        return parseFloat(answer);
    }else if(array[1] === 'x'){
        answer = (nums.reduce((a, b) => a * b, 1)).toPrecision(15);
        return parseFloat(answer);
    }else if(array[1] === '÷'){
        if(array[0] != 0 && array[2] != 0){
            answer = (nums.reduce((a, b) => a / b)).toPrecision(15);
            return parseFloat(answer);
        }else{
            return "ERR";
        }
    }
}

const displayValue = document.getElementById("displayValue");
displayValue.textContent = '0';

const calcValue = document.getElementById("calc");

//number buttons into array and event listener 
const numbers = document.querySelectorAll('button.number');
const numberArray = Array.from(numbers);
numberArray.map(number => number.addEventListener('click', numberOutput));

//number assignment logic
function numberOutput() {
    if(operation !== undefined){
        if(displayValue.textContent.length < 15){
            displayValue.textContent += this.textContent;
            value2 = Number(displayValue.textContent);
        }
    }else{
        if(displayValue.textContent.length < 15){
            if(displayValue.textContent === '0' || value1 !== undefined){
                displayValue.textContent = '';
                value1 = undefined;
            }
            displayValue.textContent += this.textContent;
            calcValue.textContent = '';
        }
    }
}

//operator buttons into array and event listener 
const operators = document.querySelectorAll('button.operator');
const operatorArray = Array.from(operators);
operatorArray.map(operator => operator.addEventListener('click', operatorInput));

//operator assignment logic
function operatorInput() {
    if(displayValue.textContent !== 'ERR' && /e/g.test(displayValue.textContent) === false){
        if(value1 === undefined){
            value1 = Number(displayValue.textContent);
            operation = this.textContent;
            calculation = [value1, operation];
            decimal.className = "number";
            calcValue.textContent = `${calculation[0]} ${calculation[1]}`;
            displayValue.textContent = '';
        }if(value1 !== undefined && operation === undefined){
            operation = this.textContent;
            calculation = [value1, operation];
            decimal.className = "number";
            calcValue.textContent = `${calculation[0]} ${calculation[1]}`;
            displayValue.textContent = '';
        }if(operation !== undefined && value2 !== undefined){
            if(calculation.length === 2){
                calculation.push(value2);
                calcValue.textContent = operate(calculation);
                value1 = operate(calculation);
                if (displayValue.textContent.length > 15){
                    displayValue.style.fontSize = "35px";
                }else{
                    displayValue.style.fontSize = "50px";
                }
                operation = this.textContent;
                value2 = undefined;
                calculation = [value1, operation];
                calcValue.textContent = `${calculation[0]} ${calculation[1]}`;
                displayValue.textContent = '';
            }else{
                calculation = [value1, operation, value2];
                calcValue.textContent = `${calculation[0]} ${calculation[1]} ${calculation[2]}`;
                displayValue.textContent = operate(calculation);
                if (displayValue.textContent.length > 15){
                    displayValue.style.fontSize = "35px";
                }else{
                    displayValue.style.fontSize = "50px";
                }
            }
        }
    }
}

//Event listener for Equals button
const equals = document.getElementById("equals");
equals.addEventListener('click', () => {
    if(calculation.length === 2){
        calculation.push(value2);
        displayValue.textContent = operate(calculation);
        calcValue.textContent = `${calculation[0]} ${calculation[1]} ${calculation[2]}`;
        value1 = operate(calculation);
        if (displayValue.textContent.length > 15){
            displayValue.style.fontSize = "35px";
        }else{
            displayValue.style.fontSize = "50px";
        }
        calculation = [value1];
        value2 = undefined;
        operation = undefined;
        decimal.className = "number";
    }
})

//Event listener for ClearAll button
const clearAll = document.getElementById("clearAll");
clearAll.addEventListener('click', () => {
    displayValue.textContent = '0';
    calcValue.textContent = '';
    value1 = undefined;
    value2 = undefined;
    operation = undefined;
    calculation = [];
    decimal.className = "number";
    displayValue.style.fontSize = "50px";
})

//Event listener for ClearEntry button
const clearEntry = document.getElementById("clearEntry");
clearEntry.addEventListener('click', () => {
    if(calculation.length === 0){
        displayValue.textContent = '0';
    }else if(calculation.length === 2 && value2 === undefined){
        calculation.pop(operation);
        calcValue.textContent = `${calculation[0]}`;
        displayValue.textContent = '';
        operation = undefined;
    }else if(calculation.length === 2 && value2 !== undefined){
        displayValue.textContent = '';
        value2 = undefined;
        decimal.className = "number";
    }else if(calculation.length === 3){
        calculation.pop(value2);
        calcValue.textContent = `${calculation[0]} ${calculation[1]} `;
        displayValue.textContent = '';
        value2 = undefined;
    }
})

//Eevnt listener for pos/Neg button
const posNeg = document.getElementById("posNeg");
posNeg.addEventListener('click', (negHandle));

function negHandle(){
    if(displayValue.textContent !== 'ERR' && /e/g.test(displayValue.textContent) === false){
        displayValue.textContent = Number(displayValue.textContent)*-1;
        if(calculation.length === 2){
            value2 = value2*-1;
        }else if(calculation.length === 1){
            value1 = value1*-1;
        }
    }
}

//Reset all values if ERROR thrown from dividing by 0.
function ifError() {
    if (displayValue.textContent === 'ERR' || /e/g.test(displayValue.textContent) === true){
        value1 = undefined;
        value2 = undefined;
        operator = undefined;
        calculation =[];
    }
}

const decimal = document.getElementById("decimal");
decimal.addEventListener('click', (decimalControl));

function decimalControl(){
        decimal.className = "disabled";
        if((/^\./g.test(displayValue.textContent)) === true){
            displayValue.textContent = "0"+ displayValue.textContent;
        }
}
