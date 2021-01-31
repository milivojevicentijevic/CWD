// window.alert('Hello');
// window.alert(prompt());

// if (confirm("Do you want to quit?")) {
//     console.log('Ok');
// } else {
//     console.log('No');
// }

let x, y;

x = window.outerWidth;
y = window.outerHeight;
console.log(x + " " + y);    // 978 1066

x = window.innerWidth;
y = window.innerHeight;
console.log(x + " " + y);    // 962 150

x = window.location;
console.log(x);    // Location {ancestorOrigins:...}
x = window.location.hostname;
console.log(x);    // 127.0.0
x = window.location.port;
console.log(x);    // 5500
x = window.location.href;
console.log(x);    // http://127.0.0.1:5500/
//x = window.location.search;  // ?name=milivoje&page=24

// Redirect
// window.location.href = 'https://apple.com';
// console.log(x);    // it goes to apple site

x = window.navigator;
console.log(x);    // Navigator {vendorSub: "", productSub: "20030107", vendor: "Google Inc.", maxTouchPoints: 0, userActivation: UserActivation, …}