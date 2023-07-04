//flat() method creates and returns a new array that contains the same elements as the array it is called on, except that any elements that are themselves arrays are “flattened” into the returned array.
//----------------------------------------------------------------------------
console.log([1, [2, 3]].flat()); // => [1, 2, 3]
console.log([1, [2, [3]]].flat()); // => [1, 2, [3]]
//----------------------------------------------------------------------------
//When called with no arguments, flat() flattens one level of nesting. Elements of the original array that are themselves arrays are flattened, but array elements of those arrays are not flattened. If you want to flatten more levels, pass a number to flat():
//----------------------------------------------------------------------------
let a = [1, [2, [3, [4]]]];
console.log(a.flat(1)); // => [1, 2, [3, [4]]]
console.log(a.flat(2)); // => [1, 2, 3, [4]]
console.log(a.flat(3)); // => [1, 2, 3, 4]
console.log(a.flat(4)); // => [1, 2, 3, 4]
//----------------------------------------------------------------------------
