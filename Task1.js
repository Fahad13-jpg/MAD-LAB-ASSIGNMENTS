function Add(a, b) {
    if (a === undefined) a = 0;
    if (b === undefined) b = 0;
    return a + b;
}
console.log("Add:", Add(2));  
console.log("Add:", Add(2, 3));  


function subtract(a = 0, b = 0) {
    return a - b;
}
console.log("Subtract:", subtract(5));   
console.log("Subtract:", subtract(10, 3)); 


function multiply(...args) {
    if (args.length === 0) return 0;
    let value = 1;
    for (let arg of args) {
        value *= arg;
    }
    return value;
}
console.log("Multiply:", multiply(2, 3, 4)); 
console.log("Multiply:", multiply()); 


function divide() {
    if (arguments.length === 0) {
        return "No arguments found!";
    }

    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] === 0) {
            return "Division by zero is not allowed!";
        }
        result /= arguments[i];
    }
    return result;
}
console.log("Divide:", divide(100, 2, 5)); 
console.log("Divide:", divide()); 
console.log("Divide:", divide(10, 0)); 
