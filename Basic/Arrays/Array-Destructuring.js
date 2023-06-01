// ====================================================
//allows you to unpack arrays into a bunch of variables
// ====================================================

const myArray = ["value1", "value2", "value3", "value4"];

const [myArr1, myarr2, ...myNewArr] = myArray;
console.log("value of myvar1", myArr1); //value1
console.log("value of myvar1", myarr2); //value2
console.log(myNewArr); //['value3','value4']
// ====================================================
//ignores elements using commas
// ====================================================
let [fName, title] = ["john", "ceaser", "counsel", "of the rooms"];
console.log(title); //ceaser
//works with any iterable on right-side
let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);
//assign to anything on left-hand-side
let user = {};
[user.name, user.surname] = ILyaKantor.split("");
// ====================================================
let coords = [51.0, -0.1];

let [lat,lng]= coords;
console.log(lat);  //51.0
console.log(lng);  //-0.1
// ====================================================
