/// Primitive data types
let name = 'Milivoje';
console.log(name);    // Milivoje
console.log(typeof name);    // string
let age = 24;
console.log(age);    // 24
console.log(typeof age);    // Number
let isTrue = true;
console.log(isTrue);    // true
console.log(typeof isTrue);    // boolean
let phone = null;
console.log(phone);    // null
console.log(typeof phone);    // object
let car;
console.log(car);    // undefined
console.log(typeof car);    // undefined
let symbol = Symbol();
console.log(symbol);    // Symbol()
console.log(typeof symbol);    // symbol
/// Reference types (all come back as object)
const cars = ['Volkswagen','Audi','BMW'];
console.log(cars);    // (3) ["Volkswagen", "Audi", "BMW"]
console.log(typeof cars);    // object
const fruits = new Array('Apple','Pear','Plum');
console.log(fruits);    // (3) ["Apple", "Pear", "Plum"]
console.log(typeof fruits);    // object
var personalInfo = {
    city: 'Valjevo',
    country: 'Serbia'
};
console.log(personalInfo);    // {city: "Valjevo", country: "Serbia"}
console.log(typeof fruits);    // object
const today = new Date();
console.log(today);
console.log(typeof today);




