//------------------------------------------
//declaring a function with function keyword
//------------------------------------------
function Hi() {
  console.log("hi world"); //function body
}
Hi(); //calling the function
// ----------------------------------
// example1
function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(4)); //true
// -----------------------------------
const bob = "Bob";
const susy = "Susy";
const anna = "Anna";

function greet(name) {
  console.log("Hello There", name);
}

greet(4); //Hello There 4
greet(anna); //Hello There anna
greet(bob); //Hello There bob
greet(anna); //Hello There Anna
// --------------------------------------
const wallHeight = 80;
function calculate(value) {
  return value * 2.54;
}
const width = calculate(wallHeight);
console.log(width); //203.2
// --------------------------------------
//a function declaration can be called earlier than it is defined
sayHi("John");
function sayHi(name) {
  console.log(`Hello,${name}`); //Hello,John
}
//------------------------------------
// A variable declared inside a function is only visible inside that function.
//------------------------------------
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable
  alert(message);
}
showMessage(); // Hello, I'm JavaScript!
alert(message); // <-- Error! The variable is local to the function
//------------------------------------
