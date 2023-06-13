let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };
console.log(rect.x + rect.y + rect.width + rect.height); // => 175
//----------------------------------------------------------------
//If the object that is spread and the object it is being spread into both have a property with the same name, then the value of that property will be the one that comes last:

let o = { x: 1 };
let p = { x: 0, ...o };
p.x; // => 1: the value from object o overrides the initial value
let q = { ...o, x: 2 };
q.x; // => 2: the value 2 overrides the previous value from o.
//----------------------------------------------------------------
//can add new key value 
const obj1 = {
  key: "value1",
  key2: "value2"
};

const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4"
};

const newObj = { ...obj2, ...obj1, key78: "value78" };
console.log(newObj);
//answer
// {key1: 'valueUnique', key3: 'value3', key4: 'value4', key: 'value1', key2: 'value2', key78:'value78'}

// ----------------------------------------------
const newObjects = { ...["item1", "item2"] };
console.log(newObjects); //{0: 'item1', 1: 'item2'}

//-------------------------------------------
const array1 = [1, 2, 3];
const array2 = [5, 6, 7];
const newArr = [...array1, ...array2, 89, 90];
console.log(myArray); //[1,2,3,5,6,7,89,90]
//--------------------------------------------
const newArray = [..."123456789"];
console.log(newArr); //['1','2','3','4','5','6','7','8','9']
//-----------------------------------------------
