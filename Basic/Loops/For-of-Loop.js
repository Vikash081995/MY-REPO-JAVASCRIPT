let data = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  sum = 0;
for (let element of data) {
  sum += element;
}
sum; // => 45
//----------------------------------------------
//for of with objects
//----------------------------------------------
// Objects are not (by default) iterable. Attempting to use for/of on a regular object throws a TypeError at runtime:
let o = { x: 1, y: 2, z: 3 };

for (let element of o) {
  // Throws TypeError because o is not iterable
  console.log(element);
}
// If you want to iterate through the properties of an object, you can use the for/inor use for/of with the Object.keys() method:
let o1 = { x: 1, y: 2, z: 3 };
let keys = "";
for (let k of Object.keys(o1)) {
  keys += k;
}
keys; // => "xyz"
//----------------------------------------------
// for of with Arrays
//----------------------------------------------
const fruits = ["apple", "mango", "grapes"];
const fruits2 = [];
for (let fruit of fruits) {
  fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);

// [
//     "APPLE",
//     "MANGO",
//     "GRAPES"
// ]
//-------------------------------------------------
//for of iterates over the property values
//-------------------------------------------------
for (const value of ["a", "b", "c"]) {
  console.log(value);
}
//a
//b
//c
//----------------------------------------------
//to get Index as well as value
//----------------------------------------------
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
// --------------------------------------------

let string = "text";
for (let value of string) {
  console.log(value);
}
//'t','e','x','t'
// --------------------------------------------------
//for of with set and map
// --------------------------------------------------
let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for(let word of wordSet) {
    unique.push(word);
}
console.log(unique) // => ["Na", "na", "Batman!"]