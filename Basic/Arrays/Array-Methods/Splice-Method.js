const myArray = ["item1", "item2", "item3"];

//delete
const deleteItem = myArray.splice(1, 1);
console.log("delete item", deleteItem); //['item2']

//insert
myArray.splice(1, 0, "inserted item");
console.log(myArray); //['item1', 'inserted item', 'item3']

//insert and delete
const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2");
// console.log("deleted item", deleteItem);/['item2']
console.log(myArray); //['item1', 'inserted item1', 'inserted item2']
// ----------------------------------------------------------------------------
//starts from index 1 and delete one element
let arr = ["i", "study", "javascript"];
arr.splice(1, 1);
console.log(arr); //['i','javascript']
//------------------------------------------------------------------------------
//remove 3 elements and replace them with other two
//------------------------------------------------------------------------------
let arr1 = ["i", "study", "javascript", "right", "now"];
arr1.splice(0, 3, "lets", "dance");
console.log(arr1); //['lets', 'dance', 'right', 'now']
//splice will return the array of removed elements 
let arr3 = ["1", "2", "3", "4"];
let rem = arr3.splice(0, 2);
console.log(rem); //['1' ,'2']
//can also insert elements without any removal
let arr4 = ['i','study','js'];
arr4.splice(2, 0,'complex','lan');
console.log(arr4);//['i', 'study', 'complex', 'lan', 'js']
//