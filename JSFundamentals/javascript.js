const jobs = ['Software dev','HR Analyst','Marketing','Finance'];
console.log(jobs);    // (4) ["Software dev", "HR Analyst", "Marketing", "Finance"]
const age = new Array(22, 23, 24, 55, 74, 55, 18);
console.log(age);    // (7) [22, 23, 24, 55, 74, 55, 18]

let test;
test = age.length;
console.log(test);    // 7
test = Array.isArray(age);
console.log(test);    // true
test = jobs['Marketing'];
console.log(test);    // undefined
test = jobs[0];
console.log(test);    // Software dev
jobs.push('Data analyst');
console.log(jobs);    // (5) ["Software dev", "HR Analyst", "Marketing", "Finance", "Data analyst"]
jobs.pop();
console.log(jobs);    // (4) ["Software dev", "HR Analyst", "Marketing", "Finance"]
jobs.shift();
console.log(jobs);    // (3) ["HR Analyst", "Marketing", "Finance"]
jobs.unshift('Software dev');
console.log(jobs);    // 4) ["Software dev", "HR Analyst", "Marketing", "Finance"]
test = jobs.join(' | ');
console.log(test);    // Software dev | HR Analyst | Marketing | Finance
test = jobs.reverse();
console.log(test);    // (4) ["Finance", "Marketing", "HR Analyst", "Software dev"]
test = jobs.sort();
console.log(test);    // (4) ["Finance", "HR Analyst", "Marketing", "Software dev"]

const mixed = ["word", 23, 16, true, undefined, "TH"];
test = mixed.sort();
console.log(test);    // (6) [16, 23, "TH", true, "word", undefined]
