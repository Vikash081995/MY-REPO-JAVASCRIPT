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
//-----------------------------------

const person1 = {
  id: 1,
  fname: "rajesh"
};
const userInfo = new Map();
userInfo.set(person1, { age: 8, gender: "male" });
console.log(userInfo); //key:{id:1,fname:'rajesh'} value:{age:8,gender:'male}
//-----------------------------------
