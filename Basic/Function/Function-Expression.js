//-------------------------------------
//Function can be assigned to variables
//-------------------------------------
const Hi = function () {
  console.log("hello  world");
};
Hi();
// ------------------------------------
const isEven = function (number) {
  return number % 2 === 0;
};
console.log(isEven(2)); //true
// -------------------------------------
function calculateTotal(subTotal, tax) {
  const total = subTotal + tax;
  return total;
}
console.log(calculateTotal(200, 20)); //220
// -----------------------------------------
//we can copy a function to another variable
//------------------------------------------
function sayHi() {
  console.log("hello");
}
let Func = sayHi;
Func(); //hello
sayHi(); //hello
//----------------------------------------------
//A function Expression cannot be called earlier
//----------------------------------------------
sayHi("john"); //error
let sayHi = function (name) {
  console.log(`Hello,${name}`);
};
//----------------------------------------------
