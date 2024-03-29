//Object.create() creates a new object, using its first argument as the prototype of that object:
//-------------------------------------------------------
let o1 = Object.create({ x: 1, y: 2 }); // o1 inherits properties x and y.
console.log(o1.x + o1.y); //3
//-------------------------------------------------------

//You can pass null to create a new object that does not have a prototype, but if you do this, the newly created object will not inherit anything, not even basic methods like toString()
let o2 = Object.create(null); // o2 inherits no props or methods
//-------------------------------------------------------
// If you want to create an ordinary empty object (like the object returned by {} or new Object()), pass Object.prototype:
let o3 = Object.create(Object.prototype); // o3 is like {} or new Object().
//-------------------------------------------------------
