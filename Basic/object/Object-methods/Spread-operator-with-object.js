let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let combine = { ...position, ...dimensions };
console.log(combine.x + combine.y + combine.width + combine.height); //175
//--------------------------------------------------------------------------
// If the object that is spread and the object it is being spread into both have a property with the same name, then the value of that property will be the one that comes last:
//--------------------------------------------------------------------------
let o = { x: 1 };
let p = { x: 0, ...o };
console.log(p.x); //1
let q = { ...o, x: 2 };
console.log(q.x); //2
//-----------------------------------------------------------------
//can add new key value
//-----------------------------------------------------------------
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
//-----------------------------------------------------------------
//spread with arrays inside object
//-----------------------------------------------------------------
const newObjects = { ...["item1", "item2"] };
console.log(newObjects); //{0: 'item1', 1: 'item2'}
//-----------------------------------------------------------------
