const obj = {
  key1: "value1",
  key2: "value2"
};
const obj2 = obj;
obj.key3 = "value3";
console.log(obj); //{key1: 'value1', key2: 'value2', key3: 'value3'}
console.log(obj2); //{key1: 'value1', key2: 'value2', key3: 'value3'}
//------------------------------------------------------------------------
// copy object using object.assign

const object1 = {
  key1: "value1",
  key2: "value2"
};
const obj3 = Object.assign({ key69: "value69" }, object1);
console.log(object1); //{key1: 'value1', key2: 'value2'}
console.log(obj3); //{key69: 'value69', key1: 'value1', key2: 'value2'}
//------------------------------------------------------------------------
