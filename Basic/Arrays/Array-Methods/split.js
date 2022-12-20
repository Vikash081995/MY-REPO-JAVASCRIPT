//---------------------------------------------------------------------
// Split:splits the string into an array bby given delimeter delim
//---------------------------------------------------------------------
let names = "Bilbo,gandalf,nazgul";
let arr = names.split(",");
console.log(arr); //['Bilbo', 'gandalf', 'nazgul']
for (let names of arr) {
  console.log(`a messge to ${names}`);
}
//a messge to Bilbo
//a messge to gandalf
// a messge to nazgul
//---------------------------------------------------------------------
let arr1 = "ball,bat,apple,orange".split(",", 2);
console.log(arr1); //['ball', 'bat']
//---------------------------------------------------------------------
let str = "test";
console.log(str.split("")); //['t', 'e', 's', 't']
//---------------------------------------------------------------------
