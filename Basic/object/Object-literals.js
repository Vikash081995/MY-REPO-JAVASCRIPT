//an object literal is a comma-separated list of colon-separated name:value pairs, enclosed within curly braces.
//------------------------------------------------------

let empty = {}; // An object with no properties
let point = { x: 0, y: 0 }; //Two numeric properties
let p2 = { x: point.x, y: point.y + 1 };
let book = {
  // More complex values
  "main title": "JavaScript", // These property names include spaces,
  "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
  for: "all audiences", // for is reserved, but no quotes.
  author: {
    // The value of this property is
    firstname: "David", // itself an object.
    surname: "Flanagan"
  }
};
//-------------------------------------------------------------
// The new operator creates and initializes a new object. The new keyword must be followed by a function invocation. A function used in this way is called a constructor and serves to initialize a newly created object.

let o = new Object(); // Create an empty object: same as {}.
let a = new Array(); // Create an empty array: same as [].
let d = new Date(); // Create a Date object representing the current time
let r = new Map(); // Create a Map object for key/value mapping
//-------------------------------------------------------------
