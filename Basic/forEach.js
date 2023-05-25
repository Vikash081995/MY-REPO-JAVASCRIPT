//---------------------------------------------
let arr1 = ["bilbo", "gandalf", "nazgul"];
let print = function (item, index, object) {
  console.log(item);
};
arr1.forEach(print);
//bilbo
//gandalf
//nazgul
//---------------------------------------------

const numbers = [4, 2, 5, 8];
numbers.forEach(function (number, index) {
  console.log(`Index is ${index}number is ${number}`);
});
//Index is 0 number is 4
//Index is 1 number is 2
//Index is 2 number is 5
//Index is 3 number is 8
//--------------------------------------------------

const users = [
  { fName: "Harshit", age: 23 },
  { fName: "Raj", age: 21 },
  { fName: "Nitish", age: 22 },
  { fName: "garima", age: 20 }
];

users.forEach(function (user) {
  console.log(user.fName);
});
//Harshit
//Raj
//Nitish
//garima

users.forEach(function(user,index){
  console.log(user.fName,index)
})
//Harshit 0
//Raj 1
//Nitish 2
//garima 3
//----------------------------------------------