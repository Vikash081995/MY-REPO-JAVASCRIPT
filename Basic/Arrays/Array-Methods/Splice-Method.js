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
