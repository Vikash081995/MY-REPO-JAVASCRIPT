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