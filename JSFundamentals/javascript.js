// Primitive data types
let name = "Milivoje";
console.log(name);
console.log(typeof name);

let age = 35;
console.log(age);
console.log(typeof age);

let isTrue = true;
console.log(isTrue);
console.log(typeof isTrue);

let phone = null;
console.log(phone);
console.log(typeof phone);

let car;
console.log(car);
console.log(typeof car);

let symbol = Symbol();
console.log(symbol);
console.log(typeof symbol);

// Reference types (all come back as object)
const cars = ['Valkswagen','Audi','BMW'];
console.log(cars);
console.log(typeof cars);
const fruits = new Array('Apple','Pear','Plum');
console.log(fruits);
console.log(typeof fruits);

var personalInfo = {
    city: 'Valjevo',
    state: 'Serbia'
};
console.log(personalInfo);
console.log(typeof personalInfo);

const today = new Date();
console.log(today);
console.log(typeof today);
