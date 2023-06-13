const fruits = ["apple", "mango", "grapes", "fruits5"];
const fruits2 = [];
for (let index in fruits) {
  fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);
//["APPLE","MANGO","GRAPES","FRUITS"]
//---------------------------------------------------
// for in loop works with enumerable object properties
//---------------------------------------------------
let object = {
  a: 1,
  b: 2,
  c: 3,
  method: () => {}
};
for (let value in object) {
  console.log(value, object[value]);
}
//a 1
//b 2
//c 3
// ---------------------------------------------
let List = [4, 5, 6];
for (let i in List) {
  console.log(i);
}
//0
//1
//2
// ---------------------------------------------
//for-in-loop:to loop over all the keys
// ---------------------------------------------
let user = {
  name: "john",
  age: 30,
  isAdmin: true
};
for (let key in user) {
  console.log(key);
  console.log(user[key]);
}
//name
//john
//age
//30
//isAdmin
//true
//-----------------------------------------------------------
//Integer property are sorted ,other appears in creation order
//-----------------------------------------------------------
let codes = {
  49: "germany",
  41: "delhi",
  44: "USA",
  1: "UK"
};
for (let code in codes) {
  console.log(code);
}
//1
//41
//44
//49
//-----------------------------------------------------------
//to convert it to non-integer,add + sign before each code
//-----------------------------------------------------------
let codes1 = {
  "+49": "Delhi",
  "+41": "Swizerland",
  "+44": "USA",
  "+1": "UK"
};
for (let code in codes1) {
  console.log(+code);
}
//49
//41
//44
//1
//-------------------------------------------------------
