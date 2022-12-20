//------------------------------------------------------------------------------------------
//a set is a collection of values, where each value may occur once
//methods:-
//new Set(iterable):- create the set and if an iterable object is provided(usually an array),copies values from it into the set
//set.add(value):- adds a value,returns the set itself
//set.delete(value):- remove the value,return true if value existed at the moment of the call else false
//set.has(value):- return true if the value exists in the set
//set.clear(): removes everything from set
//set.size:- is the elemnts count
//------------------------------------------------------------------------------------------
const Numbers = new Set([1, 2, 3]);
console.log(Numbers); //{1, 2, 3}
// ------------------------------------------------------------------------------------------
const items = ["item1", "item2", "item3"];
const number = new Set();
number.add(1);
number.add(2);
number.add(items);
console.log(number); //Set(3) {1, 2, Array(3)}
// -----------------------------------------------------------------------------------------
const item = ["item1", "item2", "item3"];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(items);
console.log(numbers); //Set(4) {1, 2, 3, Array(3)}
for (let number of numbers) {
  console.log(number);
}
//1
//  2
//  3
//  (3) ['item1', 'item2', 'item3']
// -----------------------------------------------------------------------------------------
const myArray = [1, 2, 3, 4, 4, 5, 7, 6, 7];
const uniqueElements = new Set(myArray);
let length = 0;
for (let element of uniqueElements) {
  length++;
}
console.log(uniqueElements); //{1,2,3,4,5,7,6}
console.log(length); //7
// -----------------------------------------------------------------------------------------
// methods sets has for iterators
//set.keys():-  return an iterator object for values
//set.values():- same as set.keys
//set.entries():-returns an iterable object
// -----------------------------------------------------------------------------------------

