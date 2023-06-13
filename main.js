let o = { x: 1 };
console.log("x" in o); // => true: o has an own property "x"
console.log("y" in o); // => false: o doesn't have a property "y"
console.log("toString" in o); // => true: o inherits a toString property
