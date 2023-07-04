// ---------------------------------
// FOR LOOP IN ARRAY
// --------------------------------

let fruits = ["apple", "mango", "grapes", "banana"];
let fruits2 = [];
for (let i = 0; i < fruits.length; i++) {
  fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);
// --------------------------------
// for-of loop
// --------------------------------
let letters = [..."Hello world"];
let string = "";
for (let letter of letters) {
  string += letter;
}
console.log(string);
// Output: "Hello world";
// --------------------------------
//If you want to use a for/of loop for an array and need to know the index of each array element, use the entries() method of the array,
//---------------------------------
let letters1 = [..."Hello world"]; // An array of letters
let everyother = "";
for (let [index, letter] of letters1.entries()) {
  if (index % 2 === 0) everyother += letter; // letters at even indexes
}
console.log(everyother); // => "Hlowrd"
//---------------------------------
//forEach()
//---------------------------------
let letters2 = [..."Hello world"]; // An array of letters
let uppercase = "";
letters2.forEach((letter) => {
  // Note arrow function syntax here
  uppercase += letter.toUpperCase();
});
console.log(uppercase); // => "HELLO WORLD"
//---------------------------------
