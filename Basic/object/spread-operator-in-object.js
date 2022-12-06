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
 