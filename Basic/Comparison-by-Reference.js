//------------------------------------------------------
//two objects are equal only if they are the same object
//------------------------------------------------------
let a = {};
let b = a;
console.log(a == b); //true
console.log(a === b); //true
//-------------------------------------------
//if two objects are empty they are not equal
//-------------------------------------------
let a1 = {};
let b1 = {};
console.log(a1 == b1);//false
//--------------------------------------------
