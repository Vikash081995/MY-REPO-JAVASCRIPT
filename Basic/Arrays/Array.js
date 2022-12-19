// arrya definition
const friendz=['john','peter','susy',45,undefined,null];
// ---------------------------------------------
let fruits = ["apples", "mango", "grapes"];
console.log(fruits[2]); //grapes
// ========================================
let names = ["john", "bebo", "olga", "ben"];

//length
console.log(names.length); //4
console.log(names[names.length - 1]); //ben

//concat
const lastNames = ["pepper", "onion", "banana"];
const allNames = names.concat(lastNames);
console.log(allNames); //['john', 'bebo', 'olga', 'ben', 'pepper', 'onion', 'banana']

//unshift:Add the element to the beginning of the array
allNames.unshift("susy");
allNames.unshift("susy");
console.log(allNames); //['susy', 'susy', 'john', 'bebo', 'olga', 'ben', 'pepper', 'onion', 'banana']

//shift:-extract the 1st element of array and returns it
allNames.shift();
allNames.shift();
console.log(allNames); // ['john', 'bebo', 'olga', 'ben', 'pepper', 'onion', 'banana']

//push:-append the element to the end of array
allNames.push("susy");
console.log(allNames); //['john', 'bebo', 'olga', 'ben', 'pepper', 'onion', 'banana', 'susy']

//pop:-extract last element and returns it
allNames.pop('susy');
console.log(allNames);//['john', 'bebo', 'olga', 'ben', 'pepper', 'onion', 'banana']

allNames.pop();
allNames.pop();
allNames.pop();
allNames.pop();
console.log(allNames); //['john', 'bebo', 'olga']

//splice-mutates original array
const specificNames = allNames.splice(2,1);
console.log(specificNames);//['olga']
console.log(allNames); //['john', 'bebo']

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
// ['apple', 'mango', 'rapes', 'oranges']

//POP METHOD-----------------------------
let Fruits = ["apple", "mango", "grapes"];
let PoppedFruits = Fruits.pop();
console.log(Fruits); //['apple', 'mango']
console.log(PoppedFruits); //grapes

//UNSHIFT METHOD-------------------------
Fruits.unshift("orange");
Fruits.unshift("myFruit");
console.log(Fruits);
//['myFruit', 'orange', 'apple', 'mango']

//SHIFT METHOD---------------------------
let removedFruits = Fruits.shift();
console.log(Fruits);
//['orange', 'apple', 'mango']
console.log(removedFruits); //myFruit
