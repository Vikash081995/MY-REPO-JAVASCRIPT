//We can use square brackets in an object literal, when creating an object. That’s called computed properties.
let fruit = prompt("which fruit to buy ?", "apple");

let bag = {
  [fruit]: 5
};
alert(bag.apple); //5
//------------------------------------------------------------
let fruit1 = "apple";
let bag1 = {
  [fruit1 + "Computers"]: 5
};
console.log(bag1.appleComputers); //5

//-------------------------------------------------------------

const key1 = "objectkey1";
const key2 = "objectkey2";

const value1 = "myvalue1";
const value2 = "myValue2";

const obj = {};
obj[key1] = value1;
obj[key2] = value2;
console.log(obj);
//answer
// {
//     objectkey1:'myvalue1',
//     objectkey2:'myvalue2',
// }
//-------------------------------------------------------------
