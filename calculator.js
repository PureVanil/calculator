// first number
// what we are doing
// second number
let first = NaN;
let operator = "";
let second = NaN;
let rahhh = true

//      left, operator, right, equals
// Example for 1 + 2 = 3
// First we need the left hand side of the sum (1)
// - Person types 1

// Next we need the operator (+)
// - Person types +
// - You store the 1 into `first`
// - You store the "+" into `operator`

// Next we need the right hand side of the sum (2)
// - Person types 2

// Finally, we do the math
// - Person types =
// - You store the 2 into `second`
// - You do the math (You know 1, "+", 2)
//      - Log 3 to console

let screen = document.getElementById("screen");
function press(num) {
    if (rahhh){
        calculatorClear()
        rahhh = false
    }
    screen.value = screen.value + num;
    // console.log(num);
}

function plus() {
    // Next we need the operator (+)
    // - Person types +
    // - You store the number in the input into `first`
    // - You store the "+" into `operator`
    equals();
    first = parseFloat(screen.value);
    operator = "+";
    screen.value = "";
    // console.log("Plus: " + first);
}

function minus() {
    equals();
    first = parseFloat(screen.value);
    operator = "-";
    screen.value = "";
    // console.log("Minus: " + first);
}

function multiply() {
    equals();
    first = parseFloat(screen.value);
    operator = "*";
    screen.value = "";
    // console.log("Multiply: " + first);
}

function divide() {
    equals();
    first = parseFloat(screen.value);
    operator = "/";
    screen.value = "";
    // console.log("Divide: " + first);
}

function equals() {
    // Run if these conditions are BOTH true:
    //  - isNaN(first)
    //  - isNaN(second)
    if(isNaN(first) && isNaN(second)) {
        // console.log("Your Equation Is Blank")
        return;
    }
    rahhh = true

    second = parseFloat(screen.value);
    screen.value = "";
    let result = 0;

    // If either number is NaN, 
    //       the result is the one that IS a number (and not garbage)
    if(isNaN(first)) {
        // NaN + 10 = 10
        result = second;
    } else if(isNaN(second)) {
        // 10 + NaN = 10
        // first = 10
        // operator = '+'
        // second = NaN
        result = first;
    } else if (operator === "+") {
        result = first + second;
    } else if (operator === "-") {
        result = first - second;
    } else if (operator === "*") {
        result = first * second;
    } else if (operator === "/") {
        result = first / second;
    } else {
        result = first;
    }
    
    // console.log(first, operator, second, "=", result);
    let expression = document.getElementById("equation")
    expression.innerText = first + " " + operator + " " + second + " = "
    screen.value = result;

    // We want the result to go into `first`
    // We want the operator to be reset to ""
    // We want the `second` to be reset to nothing (AKA NaN)
    first = result;
    operator = "";
    second = NaN;
}

function decimal() {
    if(!screen.value.includes(".")) {
        screen.value = screen.value + ".";
    }
}

function calculatorClear() {
    // What should happen if you press clear?
    // - Empty the textbox
    // - Empty the variables
    screen.value = "";
    first = NaN;
    operator = "";
    second = NaN;
    let expression = document.getElementById("equation")
    expression.innerText = "0 + 0 ="
}

function backspace() {
    console.log("Back button pressed")
    // Given/Knowing that screen.value is a string,
    //   Remove one character from it
    //   You can use .length and .slice(start, end)
    /**
     * str = "123456"
     * console.log(str.length) // 6
     * console.log(str.slice(0, 2)) // "12"
     */
    // Where is our string? screen.value
    // How long is out string? screen.value.length
    // How long do we want the new string to be? screen.value.length - 1
    screen.value = screen.value.slice(0, screen.value.length - 1);
}