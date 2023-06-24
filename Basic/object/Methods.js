// “method”— is a function-valued property in object
let harry = {
  name: "Harry Smith",
  salary: 90000,
  raiseSalary: function (percent) {
    return (this.salary *= 1 + percent / 100);
  }
};
console.log(harry.raiseSalary(10));
//99000.00000000001

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
console.log(person.greeting()); //hello my name is JOHN
//------------------------------------------------
//shortcut syntax for declaring methods. Simply omit the colon and the `function` keyword:
//------------------------------------------------
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
console.log(car.drive()); //driving........
//-----------------------------------------------------------------
//we could use a pre-declared function as a method, like this:
let user = {
  //.....
};
function sayHi() {
  console.log("Hello!");
}

user.sayHi = sayHi;
console.log(user.sayHi); //Hello!
//-----------------------------------------------------------------
//this in methods 
//The value of this is the object “before dot”, the one used to call the method.
let user = {
  name:"John",
  age:30,

  sayHi(){
    console.log(this.name)
  }
}

user.sayHi();  //john