let array1 = ["item1", "item2"];

//method1
let array2 = array1.slice(0).concat(["item3", "item4"]);
console.log(array2);

//method2
let array3 = [].concat(array1,["item3","item4"]);
console.log(array3);

//spread operator
let oneMoreArray =['item','item4'];
let arr2 =[...array1, ...oneMoreArray];
console.log(arr2);

array1.push('item6');
console.log(array1);

console.log(array1 === array2);
