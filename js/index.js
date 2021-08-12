//business logic
let number1;
let number2;
let operation;
let answer;

var myFunction = (firstNumber, secondNumber, operator) => {
    if (operator === "+") {
        answer = firstNumber + secondNumber;
    } else if (operator === "-") {
        answer = firstNumber - secondNumber;
    } else if (operator === "*") {
        answer = firstNumber * secondNumber;
    } else if (oerator === "/") {
        answer = firstNumber / secondNumber;
    }
}

//User Interface
$(document).ready(function() {
    if (typeof(number1) === "undefined") {
        $(".numbers-buttons").click(function() {
            $("#current").append(this.value)
        })
    }

    $("[name = operation]").click(function() {
        operation = this.value;
        number1 = parseInt($("#current").text());
        $("#previous").append(number1 + operation)
        $("#current").text("");
    })

    if (typeof(number1) !== "undefined") {
        $(".numbers-buttons").click(function() {
            $("#current").append(this.value);
        })
    }


    $("#equal-sign").click(function() {
        number2 = parseInt($("#current").text());
        $("#previous").append(number2);
        $("#current").text("")
        myFunction(number1, number2, operation)
        $("#current").append(answer)
    })
})