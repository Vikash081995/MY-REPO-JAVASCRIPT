let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log(JSON.stringify(descriptor, null, 2));
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
//-------------------------------------------------------------
let user3 = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor2 = Object.getOwnPropertyDescriptor(user3, "name");
alert(JSON.stringify(descriptor2, null, 2));
/*
{
    "value": "John",
    "writable": false,
    "enumerable": false,
    "configurable": false
}
*/
//-------------------------------------------------------------
//Non Writables
//-------------------------------------------------------------
let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false
});

user.name = "Pete"; // Error: Cannot assign to read only property 'name'
//-------------------------------------------------------------
let user = {};

Object.defineProperty(user, "name", {
  value: "John",
  // for new properties we need to explicitly list what's true
  enumerable: true,
  configurable: true
});

alert(user.name); // John
//-------------------------------------------------------------
//Non-enumerable
//-------------------------------------------------------------
// /Normally, a built-in toString for objects is non-enumerable, it does not show up in for..in. But if we add a toString of our own, then by default it shows up in for..in, like this:
let user = {
  name: "john",
  toString() {
    return this.name;
  }
};
// By default, both our properties are listed:
for (let key in user) alert(key); // name, toString
// /If we don’t like it, then we can set enumerable:false. Then it won’t appear in a for..in loop, just like the built-in one:
//-------------------------------------------------------------

let user = {
  name: "john",
  toString() {
    return this.name;
  }
};

Object.defineProperty(user, "toString", {
  enumerable: false
});
// Now our toString disappears:
for (let key in user) alert(key); // name
//-------------------------------------------------------------
//Non-Configurable
//-------------------------------------------------------------
//Math.PI is non-writable, non-enumerable and non-configurable:
let descriptor23 = Object.getOwnPropertyDescriptor(Math, "PI");

alert(JSON.stringify(descriptor23, null, 2));
/*
{
    "value": 3.141592653589793,
    "writable": false,
    "enumerable": false,
    "configurable": false
}
*/
//-------------------------------------------------------------
//Please note: configurable: false prevents changes of property flags and its deletion, while allowing to change its value.
let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
    configurable: false
});

user.name = "Pete"; // works fine
delete user.name; // Error
//-------------------------------------------------------------
