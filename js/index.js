var operationButtons = document.getElementsByClassName('operation-button');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function makeOperation(operationCode) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    switch (operationCode) {
        case '+':
            var result = number1 + number2;
            break;
        case "-":
            var result = number1 - number2;
            break;
        case '*':
            var result = number1 * number2;
            break;
        case '/':
            var result = number1 / number2;
            break;
        default:
            window.alert('Operation is unknown')
    }
    window.alert(result);
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', onOperationButtonClick);
}