function makeUser(name, age) {
  return {
    name: name,
    age: age
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

//Instead of name:name we can just write name, like this:
function makeUser(name, age) {
  return {
    name, // same as name: name
    age // same as age: age
    // ...
  };
}
//We can use both normal properties and shorthands in the same object:
let user1 = {
  name, // same as name:name
  age: 30
};
