function numAddition(firstNumber, secondNumber) {
    if (isNaN(firstNumber) || isNaN(secondNumber)){
        document.getElementById("output").innerHTML = "Please input numbers only.";
    } else if (!firstNumber || !secondNumber){
        document.getElementById("output").innerHTML = "Please input numbers.";
    } else {
        var sum = parseInt(firstNumber) + parseInt(secondNumber);
        document.getElementById("output").innerHTML = "The sum of " + firstNumber + " and " + secondNumber + " is " + sum + ".";
    }
}

function numSubtraction(firstNumber, secondNumber) {
    if (isNaN(firstNumber) || isNaN(secondNumber)){
        document.getElementById("output").innerHTML = "Please input numbers only.";
    } else if (!firstNumber || !secondNumber){
        document.getElementById("output").innerHTML = "Please input numbers.";
    } else {
        var difference = parseInt(firstNumber) - parseInt(secondNumber);
        document.getElementById("output").innerHTML = "The difference of " + firstNumber + " and " + secondNumber + " is " + difference + ".";
    }
}

function numMultiplication(firstNumber, secondNumber) {
    if (isNaN(firstNumber) || isNaN(secondNumber)){
        document.getElementById("output").innerHTML = "Please input numbers only.";
    } else if (!firstNumber || !secondNumber){
        document.getElementById("output").innerHTML = "Please input numbers.";
    } else {
        var product = parseInt(firstNumber) * parseInt(secondNumber);
        document.getElementById("output").innerHTML = "The product of " + firstNumber + " and " + secondNumber + " is " + product + ".";
    }
}

function numDivision(firstNumber, secondNumber) {
    if (isNaN(firstNumber) || isNaN(secondNumber)){
        document.getElementById("output").innerHTML = "Please input numbers only.";
    } else if (!firstNumber || !secondNumber){
        document.getElementById("output").innerHTML = "Please input numbers.";
    } else {
        var quotient = parseInt(firstNumber) / parseInt(secondNumber);
        document.getElementById("output").innerHTML = "The quotient of " + firstNumber + " and " + secondNumber + " is " + quotient + ".";
    }
}

function numModulo(firstNumber, secondNumber) {
    if (isNaN(firstNumber) || isNaN(secondNumber)){
        document.getElementById("output").innerHTML = "Please input numbers only.";
    } else if (!firstNumber || !secondNumber){
        document.getElementById("output").innerHTML = "Please input numbers.";
    } else {
        var remainder = parseInt(firstNumber) % parseInt(secondNumber);
        document.getElementById("output").innerHTML = "The remainder of " + firstNumber + " and " + secondNumber + " is " + remainder + ".";
    }
}