let x = 20;
let y = 20;

// &&
if (x > 11 && y < 15) {
    console.log('True'); 
} else {
    console.log('False');   
}    // False

// ||
if (x > 11 || y < 15) {
    console.log('True'); 
} else {
    console.log('False');   
}    // True

x = true;
y = false;

// !
if (!x) {
    console.log('True'); 
} else {
    console.log('False');   
}    // False

if (!y) {
    console.log('True'); 
} else {
    console.log('False');   
}    // True

// Ternary operator
let z = x ? 'True' : 'False';
console.log(z);    // True
