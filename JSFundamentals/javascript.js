const firstName = "Petar";
const lastName = "Markovic";
const age = 36;
let val;

val = 'My name is ' + firstName + ' ' + lastName + ' and my age is ' + age;
console.log(val);    // My name is Petar Markovic and my age is 36
val = `My name is ${firstName} ${lastName} and my age is ${age}`;
console.log(val);    // My name is Petar Markovic and my age is 36
