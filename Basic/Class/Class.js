class createUser {
  constructor(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
  about() {
    return `${this.firstName} is ${this.age} years old`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return "la la la al al ala  ";
  }
}
const user1 = new createUser(
  "Harshit",
  "Vashisth",
  "harshit@gmail.com",
  18,
  "myaddress"
);
console.log(object.getPrototypeof(user1));
// -----------------------------------------------------------
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
  isSuperCute() {
    return this.age <= 1;
  }
  isCute() {
    return true;
  }
}
const animal1 = new Animal("tom", 2);
console.log(animal1);
// {
//   "name": "tom",
//   "age": 2
// }
console.log(animal1.eat()); //tom is eating
// -----------------------------------------------------------
