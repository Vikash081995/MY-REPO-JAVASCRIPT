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

