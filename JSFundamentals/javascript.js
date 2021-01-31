// while loop, do while loop, for loop:
///// Number 1
///// Number 2
///// Number 3
// for in loop
///// name is Jovan
///// age is 34
///// job is Manager

// while loop
let first = 1;
while (first <= 3) {
    console.log("Number " + first);
    first++;
}
// do while loop
let second = 1;
do {
    console.log("Number " + second);
    second++;
} while (second <= 3);
// for loop
for (let third = 1; third <= 3; third++) {
    console.log("Number " + third); 
}
// for in loop
let person = {
    name: "Jovan",
    age: "34",
    job: "Manager"
};
for (let x in person) {
    console.log(x + " is " + person[x]);
}
// for of loop
let cars = new Array('BMW', 'Volvo', 'Audi');
for (let i in cars) {
    console.log(cars[i]);
}    // BMW, Volvo, Audi (one below another )
for (let i of cars) {
    console.log(i);
}    // BMW, Volvo, Audi (one below another )
