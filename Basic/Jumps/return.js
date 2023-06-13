function square(x) {
  return x * x;
} // A function that has a return statement
console.log(square(2)); //4
//---------------------------------------------------
//The `return` statement can also be used without an *expression* to make the function return `undefined` to its caller.
//---------------------------------------------------
function displayObject(o) {
  // Return immediately if the argument is null or undefined.
  if (!o) return;
  // Rest of function goes here...
}
