let user = {}; // a user without "address" property

alert(user.address.street); // Error!
//solution would be to check the value using if or the conditional operator ?, before accessing its property, like this:
alert(user.address ? user.address.street : undefined);
//--------------------------------------------------------
// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.

// safe way to access user.address.street using ?.:
alert(user?.address?.street); // undefined (no error)
//-----------------------------------------------------------
//The optional chaining `?.` is not an operator, but a special syntax construct, that also works with functions and square brackets.

// For example, `?.()` is used to call a function that may not exist.

let userAdmin = {
  admin() {
    console.log("I m admin");
  }
};

let userGuest = {};
userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing happens (no such method)
//-----------------------------------------------------------
// The ?.[] syntax also works, if we’d like to use brackets [] to access properties instead of dot.. it allows to safely read a property from an object that may not exist.
let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined
//-----------------------------------------------------------
