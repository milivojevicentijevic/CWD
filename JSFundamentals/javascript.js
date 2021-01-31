// var - let -const
/// var
// declare variables
var name = 'Milivoje';
console.log(name);   // Milivoje
name = 'Jovan';
console.log(name);   // Jovan
// variables without value
var job;
console.log(job);   // undefined
job = 'JavaScript Developer';
console.log(job);   // JavascriptDeveloper
/// let
let newName = 'Milan';
console.log(newName);   // Milan
/// const
// have to asign it to a value!
const car = 'Mercedes';
console.log(car);   // Mercedes
// this is not good:
//const phone;
//console.log(phone);   // Uncaught SyntaxError: Missing initializer in const declaration
//car = 'Audi';
//console.log(car);   // Uncaught TypeError: Assignment to constant variable.
// eventual solution:
const person = {
    name: 'Milivoje',
    age: '35'
}
console.log(person);   // {name: "Milivoje", age: "35"}
person.name = 'Milan';
console.log(person);   // {name: "Milan", age: "35"}




