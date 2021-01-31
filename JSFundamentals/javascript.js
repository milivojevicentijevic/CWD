function showMessage() {
    console.log("This is our first function");
}
showMessage();    // This is our first function
function printOutMyName(firstName) {
    console.log("My name is " + firstName);
}
printOutMyName("Milivoje");    // My name is Milivoje
function printOutMyNameAndAge(firstName, age = 35) {
    console.log("My name is " + firstName + " and I'm " + age);
}
printOutMyNameAndAge("Milivoje");    // My name is Milivoje and I'm 35

// function with a return value
function addNumbers(num1, num2) {
    return num1 + num2;
}
let add = addNumbers(10, 10);
console.log(add);
