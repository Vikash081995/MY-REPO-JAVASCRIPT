//use the “spread operator,” ..., to include the elements of one array within an array literal:
let a = [1, 2, 3];
let b = [0, ...a, 4]; // b == [0, 1, 2, 3, 4]
//--------------------------------------------------------
//The spread operator is a convenient way to create a (shallow) copy of an array:
//--------------------------------------------------------
let original = [1, 2, 3];
let copy = [...original];
copy[0] = 0; // Modifying the copy does not change the original
original[0]; // => 1
//---------------------------------------------------------