// ================================scoping of let ===================================//
//-----------------------------------------------------------------------------------
//Defining let outside of any function does not create a global variable.it's scope is limited to block statement or expression where it's defined
//----------------------------------------------------------------------------------
let x1 = "global";
if (x1 === "global") {
  let x1 = "Inside-block";
  console.log(x1); //Inside-block
}
console.log(x1); //global
//-----------------------------------------------------------------------------------

if (true) {
  let fName = "Harshit";
  console.log(fName);
}
console.log(fName); // uncaught reference error
//-----------------------------------------------------------------------------------
// variable declared with a let inside the for loop’s clause will be in the scope of the for loop’s block:
for (let i = 0; i < 5; i++) {
  console.log(i); //0 1 2 3 4 
}
console.log(i); // Uncaught ReferenceError: i is not defined
