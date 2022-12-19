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
