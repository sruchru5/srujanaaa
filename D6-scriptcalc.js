var display = document.getElementById('display');
var operator = '';
var firstOperand = '';

function appendToDisplay(value) {
    display.value += value;
}

function setOperator(op) {
    operator = op;
    firstOperand = display.value;
    display.value = '';
}

function clearDisplay() {
    display.value = '';
    operator = '';
    firstOperand = '';
}

function calculateResult() {
    var secondOperand = display.value;
    var result = 0;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            if (parseFloat(secondOperand) === 0) {
                result = 'Error';
            } else {
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
            }
            break;
    }
    display.value = result;
    operator = '';
    firstOperand = '';
}