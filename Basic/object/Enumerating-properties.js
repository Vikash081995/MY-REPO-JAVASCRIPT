//for/in  It runs the body of the loop once for each enumerable property (own or inherited) of the specified object, assigning the name of the property to the loop variable.Built-in methods that objects inherit are not enumerable, but the properties that your code adds to objects are enumerable by default.

let o = { x: 1, y: 2, z: 3 }; // Three enumerable own properties
o.propertyIsEnumerable("toString"); // => false: not enumerable
for (let p in o) {
  // Loop through the properties
  console.log(p); // Prints x, y, and z, but not toString
}

//To guard against enumerating inherited properties with for/in, you can add an explicit check inside the loop body:
for (let p in o) {
  if (!o.hasOwnProperty(p)) continue; // Skip inherited properties
}

for (let p in o) {
  if (typeof o[p] === "function") continue; // Skip all methods
}
