function createUser(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}
createUser.prototype.about = function () {
  console.log(this.firstName, this.age);
};
const user1 = new createUser("harshit", 6);
console.log(user1.about()); //Harshit 6
// ---------------------------------------------
function createUser1(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.address = address;
}
createUser1.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
};
createUser1.prototype.is18 = function () {
  return this.age >= 18;
};
createUser1.prototype.sing= function {
    return "abc....."
}
const user2 = new createUser('Harshit','Vashisth','harshit@gmail.com',18,'myaddress');
console.log(user2);
console.log(user2.about());
// ---------------------------------------------
