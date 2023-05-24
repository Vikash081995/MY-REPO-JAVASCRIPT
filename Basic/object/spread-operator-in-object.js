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
const newArray =[..."123456789"];
console.log(newArr);  //['1','2','3','4','5','6','7','8','9']
//-----------------------------------------------
