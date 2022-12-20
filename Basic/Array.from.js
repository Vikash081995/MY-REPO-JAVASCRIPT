//Array.from takes an iterable or array-like value and makes a 'real' array from it
//---------------------------------------------------------------------------

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};
let array1 = Array.from(arrayLike);
console.log(array1.pop()); //World
//---------------------------------------------------------------------------

let range ={
    from:1,
    to:5,
}
let arr = Array.from(range);
console.log()  //1,2,3,4,5
//---------------------------------------------------------------------------
