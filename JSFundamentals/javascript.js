const now = new Date();
console.log(now);    // Sun Jan 31 2021 17:26:53 GMT+0100...
console.log(typeof now);    // object

let val;
val = now.toString();
console.log(typeof val);    // string

let birthday = new Date(1985, 4, 30, 21, 15, 00);    
console.log(birthday);    // Thu May 30 1985 21:15:00 GMT+0200 (Central European Summer Time)
birthday = new Date('May 30 1985 21:15:00');
console.log(birthday);    // Thu May 30 1985 21:15:00 GMT+0200 (Central European Summer Time)
birthday = new Date('05/30/1985 21:15:00');
console.log(birthday);    // Thu May 30 1985 21:15:00 GMT+0200 (Central European Summer Time)

let x;
x = birthday.getFullYear();
console.log(x);    // 1985
x = birthday.getMonth();
console.log(x);    // 4
x = birthday.getDay();
console.log(x);    // 4
x = birthday.getHours();
console.log(x);    // 4

 