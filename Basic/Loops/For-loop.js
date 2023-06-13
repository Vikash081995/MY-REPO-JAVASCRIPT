for (let i = 0; i <= 9; i++) {
  console.log(i);
}
// --------------------------------
let total = 0;
let num = 100;
for (let i = 1; i <= num; i++) {
  total = total + i;
}
console.log(total);
// --------------------------------
// instead of defining now , use global to resolve issues
let i = 0;
for (i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i);
//0
//1
//2
//3
// --------------------------------
// nested for loops :-
for (let y = 0; y < 2; y++) {
  for (let x = 0; x < 2; x++) {
    console.log(x, y);
  }
}
// 0 0
// 1 0
// 0 1
// 1 1
// --------------------

let fruits = ["apple", "mango", "grapes", "banana"];
let fruits2 = [];
for (let i = 0; i < fruits.length; i++) {
  fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2); //['APPLE','MANGO','GRAPES','BANANA']
