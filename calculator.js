function resetResult() {
    // Reset the result when any of the input value changes
    document.getElementById('result').value = '';
}

function calculate() {
    // Get the input values and operator
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var operator = document.getElementById('operator').value;

    // Check if any of the required field is empty
    if (isNaN(number1) || isNaN(number2) || operator.trim() === "") {
        alert("Please fill in all the required fields.");
        return;
    }

    // Perform the calculations
    var result = 0;
    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            result = 'Invalid Operator';
    }

    // Display the result
    document.getElementById('result').value = result;
   
}


