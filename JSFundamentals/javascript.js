let val;
/// to string
val = String(2);
console.log(val);    // 2
console.log(typeof val);    // string
console.log(val.length);    // 1
val = String(true);
console.log(val);    // true
console.log(typeof val);    // string
console.log(val.length);    // 4 
val = String(new Date());
console.log(val);    // Sun Jan 31 2021 14:48:16 GMT+0100...
console.log(typeof val);    // string
console.log(val.length);    // 66 
val = String([1, 2, 3, 4, 5, 6])
console.log(val);    // 1,2,3,4,5,6
console.log(typeof val);    // string
console.log(val.length);    // 11
val = (5).toString();
console.log(val);    // 5
console.log(typeof val);    // string
/// to number
val = Number('5');
console.log(val);    // 5
console.log(typeof val);    // number
console.log(val.toFixed(2));    // 5.00
val = Number(false);
console.log(val);    // 0
console.log(typeof val);    // number
val = Number('My name is Milivoje');
console.log(val);    // NaN //(not a number)
console.log(typeof val);    // number
val = Number([1, 2, 3, 4, 5, 6]);
console.log(val);    // NaN 
console.log(typeof val);    // number
val = parseInt('50.50');
console.log(val);    // 50
console.log(typeof val);    // number
console.log(val.toFixed(2));    // 50.00
val = parseFloat('100.50');
console.log(val);    // 100.5
console.log(typeof val);    // number
console.log(val.toFixed(2));    // 100.50