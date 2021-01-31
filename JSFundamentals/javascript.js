const firstName = 'Petar';
const lastName = 'Markovic';
const age = 36;

let val;
val = firstName + " " + lastName;
console.log(val);    // Petar Markovic

val = firstName + " " + lastName + " " + age;
console.log(val);    // Petar Markovic 36

// appending
val = "John ";
val += "Doe";
val += age;

console.log(val);    // John Doe36
console.log(typeof val);    // string
