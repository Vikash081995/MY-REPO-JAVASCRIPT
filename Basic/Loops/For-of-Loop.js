const fruits = ["apple", "mango", "grapes"];
const fruits2 = [];
for (let fruit of fruits) {
  fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);
//for of iterates over the property values
for (const value of ["a", "b", "c"]) {
  console.log(value);
}
//a
//b
//c
//----------------------------------------------
//to get Index as well as value
for (const [index, value] of ["a", "b", "c"].entries()) {
  console.log(index);
  console.log(value);
}
//0
//a
//1
//b
//2
//c
// --------------------------------------------
//for of and strings walk each character of string

let string = 'text';
for(let value of string){
  console.log(value);
}
//'t','e','x','t'
// --------------------------------------------------
