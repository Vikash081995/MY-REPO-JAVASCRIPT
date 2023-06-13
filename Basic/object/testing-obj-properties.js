//in operator expects a property name on its left side and an object on its right. It returns true if the object has an own property or an inherited property by that name.
//----------------------------------------------------------------
let o = { x: 1 };
console.log("x" in o); // => true: o has an own property "x"
console.log("y" in o); // => false: o doesn't have a property "y"
console.log("toString" in o); // => true: o inherits a toString property
//----------------------------------------------------------------
//The hasOwnProperty() method of an object tests whether that object has an own property with the given name. It returns false for inherited properties:
//----------------------------------------------------------------
let o1 = { x: 1 };
console.log(o1.hasOwnProperty("x")); // => true: o1 has an own property x
console.log(o1.hasOwnProperty("y")); // => false: o1 doesn't have a property y
console.log(o1.hasOwnProperty("toString")); // => false: toString is an inherited property
