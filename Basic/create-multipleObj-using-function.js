function createUser1(firstName, lastName, email, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `${this.firstName} is ${this.age} years old`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}

const user1 = createUser1(
  "Harshit",
  "vashisth",
  "harshit123@gmail.com",
  19,
  "my address"
);
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(about);
// ---------------------------------------------------------------------------
const UserMethods = {
  about: function () {
    return `${this.fname} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  }
};

function createUser(fName, lastName, email, age, address) {
  const user = {};
  user.fName = fName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = UserMethods.about;
  user.is18 = UserMethods.is18;
  return user;
}
const userDetails = createUser(
  "Harshit",
  "vashisth",
  "harsh@gamil.com",
  19,
  "Delhi"
);
console.log(userDetails.about());
