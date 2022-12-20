//-----------------------------------------------------------------------------------
//Map is a collection of keyed data items,just like an object.
//Map allows keys of any type
//create map:- new Map()
//Map.set(key,value):- stores the values by the key
//Map.get(key):- returns the value by the key,undefined if any key not exists
//Map.has(key):- true if key exists,otherwise false
//Map.delete(key):- removes the value by key
//Map.clear():-clears the map
//Map.size:- returns the current element count
//-----------------------------------------------------------------------------------
const Person = {
  fName: "Harshit",
  age: 7
};
console.log(Person.fName); //Harshit
//-----------------------------------
const person = new Map();
person.set("fname", "Harshit");
person.set("age", 7);
person.set(1, "one");
console.log(person); //{'fname' => 'Harshit', 'age' => 7, 1 => 'one'}
console.log(person.get(1)); //one
console.log(person.keys()); //{'fname', 'age', 1}

for (let key of person) {
  console.log(key);
}
//['fname', 'Harshit']
//['age', 7]
//[1, 'one']
//-----------------------------------------------------------------------
const person1 = {
  id: 1,
  fname: "rajesh"
};
const userInfo = new Map();
userInfo.set(person1, { age: 8, gender: "male" });
console.log(userInfo); //key:{id:1,fname:'rajesh'} value:{age:8,gender:'male}
//------------------------------------------------------------------------
//Chaining
//Every map.set calls return the map itself so we can chain the calls
map.set("1", "str1").set(1, "num1").set(true, "bool1");
//-------------------------------------------------------------------------
//looping over a map
//-------------------------------------------------------------------------
// For looping over a map, 3 methods
//map.keys(): returns an iterable for keys
//map.values():return an iterable for values
//map.entries():-  return an iterable for entries[key,value]
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 300],
  ["onion", 50]
]);
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
}
//cucumber
//tomatoes
//onion
for (let amount of recipeMap.values()) {
  console.log(amount);
}
//500
//300
//50
for (let entry of recipeMap.entries()) {
  console.log(entry);
}
//['cucumber', 500]
//['tomatoes', 300]
//['onion', 50]
//-------------------------------------------------------------------------
