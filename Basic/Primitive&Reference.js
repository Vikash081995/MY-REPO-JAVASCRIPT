// Primitives type

let num1 = 6;
let num2 = num1;
console.log("value of num1 is ", num1); //6
console.log("value of num2 is ", num2); //6
num1++;
console.log("after incrementing num1");
console.log("value of num1 is ", num1); //7
console.log("value of num2 is ", num2); //6

// Reference Types
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1); //['item1', 'item2']
console.log("array2", array2); //['item1', 'item2']

array1.push("item2");
console.log("array1", array1); //['item1', 'item2', 'item2']
console.log("array2", array2); //['item1', 'item2', 'item2']

// ----------------------------------------------------------
const number = 1;
let number2 = number;
number2 = 7;

console.log(`the first value is ${number}`); //the first value is 1
console.log(`the first value is ${number2}`); //the first value is 7

let person = { name: "bob" };
let person2 = person;
person2.name = "susy";
console.log(`${person.name}`); //susy
console.log(`${person2.name}`); //susy

//when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value

//when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references


let newPerson = { name: "bob" };
let newPerson2 = {...newPerson};
console.log(`${newPerson.name}`);  //bob
console.log(`${newPerson2.name}`); //bob
////------------------------------------------------------------------------------------
// Objects are different than primitives. First, they are mutable—their values can change:
let o = { x: 1 };  // Start with an object
o.x = 2;           // Mutate it by changing the value of a property
o.y = 3;           // Mutate it again by adding a new property

let a = [1,2,3];   // Arrays are also mutable
a[0] = 0;          // Change the value of an array element
a[3] = 4;          // Add a new array element
////------------------------------------------------------------------------------------
// Objects are not compared by value: two distinct objects are not equal even if they have the same properties and values. And two distinct arrays are not equal even if they have the same elements in the same order:
let o1 = {x: 1}, p1 = {x: 1};  // Two objects with the same properties
o1 === p1                      // => false: distinct objects are never equal
let a1 = [], b1 = [];          // Two distinct, empty arrays
a1 === b1                      // => false: distinct arrays are never equal
////------------------------------------------------------------------------------------
// two object values are the same if and only if they refer to the same underlying object.
let a = [];   // The variable a refers to an empty array.
let b = a;    // Now b refers to the same array.
b[0] = 1;     // Mutate the array referred to by variable b.
a[0]          // => 1: the change is also visible through variable a.
a === b       // => true: a and b refer to the same object, so they are equal.
////------------------------------------------------------------------------------------
// assigning an object (or array) to a variable simply assigns the reference: it does not create a new copy of the object. If you want to make a new copy of an object or array, you must explicitly copy the properties of the object or the elements of the array.
let a = ["a","b","c"];              // An array we want to copy
let b = [];                         // A distinct array we'll copy into
for(let i = 0; i < a.length; i++) { // For each index of a[]
    b[i] = a[i];                    // Copy an element of a into b
}
let c = Array.from(b);              // In ES6, copy arrays with Array.from()
////------------------------------------------------------------------------------------
