// Primitives types

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
console.log("array1", array1);
console.log("array2", array2);

array1.push("item2");
console.log("array1", array1);
console.log("array2", array2);
