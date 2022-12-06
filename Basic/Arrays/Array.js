// arrya definition
const friendz=['john','peter','susy',45,undefined,null];
// ---------------------------------------------
let fruits = ["apples", "mango", "grapes"];
console.log(fruits[2]); //grapes
// -----------------------------------
// isArrayMethod()
// -----------------------------------
console.log(Array.isArray(fruits));

// ===========================================
// Array Methods
// ==========================================

// PUSH METHOD ----------------------------
let fruits1 = ["apple", "mango", "rapes"];
fruits1.push("oranges");
console.log(fruits1);

//POP METHOD-----------------------------
let Fruits = ["apple", "mango", "grapes"];
let PoppedFruits = Fruits.pop();
console.log(Fruits);
console.log(PoppedFruits);

//UNSHIFT METHOD-------------------------
Fruits.unshift("orange");
Fruits.unshift("myFruit");
console.log(Fruits);

//SHIFT METHOD---------------------------
let removedFruits = Fruits.shift();
console.log(Fruits);
console.log(removedFruits);
