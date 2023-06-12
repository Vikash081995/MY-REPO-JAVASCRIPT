//Blocked-scope
//it doesn't mean variables declared with const are immutable

const Person = {
  name: "Albert",
  age: 25
};
Person.age = 26;
console.log(Person.age); //26
//const can't be set object itself to something
const user = {
  name: "john"
};
user = {
  name: "peter"
};

//Immutability or mutability is a property that belongs to the actual data that the binding contains. All primitives (strings, numbers, and so on) are immutable, whereas objects are mutable.
const mutableConstant = {};

mutableConstant.foo = "bar"; // 1 When you set foo to bar you’re modifying (mutating) the existing object.
mutableConstant.foo = "baz"; // 2 When you set foo to baz you’re modifying (mutating) the existing object.

mutableConstant = { foo: "bat" }; //Uncaught TypeError: Assignment to constant variable.
