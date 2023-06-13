//Object.assign() expects two or more objects as its arguments. It modifies and returns the first argument, which is the target object, but does not alter the second or any subsequent arguments, which are the source objects.

// Object.assign() copies properties with ordinary property get and set operations, so if a source object has a getter method or the target object has a setter method, they will be invoked during the copy, but they will not themselves be copied.
//--------------------------------------------------------------------
Object.assign(o, defaults); // overwrites everything in o with defaults
//--------------------------------------------------------------------

o = Object.assign({}, defaults, o); //create a new object, copy the defaults into it, and then override those defaults with the properties in o:
//--------------------------------------------------------------------
//Setting default values with Object.assign
//--------------------------------------------------------------------
let a = { x: 1, y: 2, z: 3 };
let b = { x: 5, y: 6 };
let c = { x: 12 };

Object.assign(a, b, c);

console.log(a); //{x:12,y:6,z:3}
//------------------------------------------------------------------------
// copy object using object.assign
//------------------------------------------------------------------------
const object1 = {
  key1: "value1",
  key2: "value2"
};
const obj3 = Object.assign({ key69: "value69" }, object1);
console.log(object1); //{key1: 'value1', key2: 'value2'}
console.log(obj3); //{key69: 'value69', key1: 'value1', key2: 'value2'}
//------------------------------------------------------------------------
// Extending objects with Object.assign
//------------------------------------------------------------------------
function createBaseSpaceShip() {
  return {
    fly: function () {
      // ... fly function implementation
    },
    shoot: function () {
      // ... shoot function implementation
    },
    destroy: function () {
      // ... function for when the ship is destroyed
    }
  };
}

function createBomberSpaceShip() {
  let spaceship = createBaseSpaceShip();

  Object.assign(spaceship, {
    bomb: function () {
      // ... make the ship drop a bomb
    }
  });

  return spaceship;
}

let bomber = createBomberSpaceShip();
bomber.shoot();
bomber.bomb();
//------------------------------------------------------------------------
// Preventing mutations when using Object.assign
//------------------------------------------------------------------------
// Object.assign mutates the first object in the parameter list, and leaves the rest of the objects unchanged, a common practice is to make the first object an empty object literal
let newObject12 = {};
Object.assign(newObject12, { foo: 1 }, { bar: 2 });
console.log(newObject12); //{foo: 1, bar: 2}

or;

let newObject1 = Object.assign({}, { foo: 1 }, { bar: 2 });
console.log(newObject1);
