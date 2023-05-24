const Person = {
  name: "Harshit",
  age: 22,
  hobbies: ["guitar", "sleeping", "listening music"]
};
console.log(Person);
console.log(Person.name); //property values are accessible using dot notation//'Harshit'
console.log(Person["age"]); //22

//add key value pair to objects
Person["gender"] = "male"; //{name:'harshit' ,age:22,hobbies:[...],person:Male}
console.log(Person);

// --------------------------------------------
const person = {
  name: "john",
  lastName: "Peters",
  age: 40,
  education: false,
  married: true,
  siblings: ["anna", "susan", "peter"],
  greeting: function () {
    console.log("hello my name is JOHN");
  }
};
const age = person.age;
console.log(age); //40
person.name = "bob";

console.log(person.name); //bob
console.log(person.siblings[2]); //peter
person.greeting;
// ---------------------------------------------
const car = {
  make: "Dodge",
  model: "Challenger",
  year: 1970,
  colors: ["black", "red"],
  hybrid: "false",
  drive: function () {
    console.log("driving........");
  },
  stop() {
    console.log("stopped!!!!!............");
  }
};
console.log(car.colors[0]); //black
console.log(car.make); //Dodge
// ---------------------------------------------------
//can use multiword property names but must be  quoted
//----------------------------------------------------
let user = {
  name: "John",
  age: 30,
  "like birds": true
};
user["like birds"] = true;
console.log(user["like birds"]); //true
//-----------------------------------------------------
