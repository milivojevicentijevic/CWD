let x;
let y;
x = 20;
y = 20;
// == equal
console.log(x == y);    // true
// == strict equal
console.log(x === y);    // true
x = '20';
y = 20;
// == equal
console.log(x == y);    // true
// == strict equal
console.log(x === y);    // false
// != not equal
console.log(x != y);    // false
// != strict not equal
console.log(x !== y);    // true
x = 10;
y = 20;
// > greater than
console.log(x > y);    // false
// >= greater than or equal
console.log(x >= y);    // false
// < less than
console.log(x < y);    // true
// <= less than or equal
console.log(x <= y);    // true