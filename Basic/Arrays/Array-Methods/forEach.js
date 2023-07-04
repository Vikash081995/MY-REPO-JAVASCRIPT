const numbers = [4, 2, 5, 8];
numbers.forEach(function (number, index) {
  console.log(`index is ${index}number is ${number}`);
});
// -------------------------------------------------------
const num = [4, 2, 5, 8];
num.forEach(function (number, index) {
  console.log(number * 3, index);
});

// ---------------------------------------------------------

const users = [
  { fName: "harshit", age: 23 },
  { fName: "Rajesh", age: 24 },
  { fName: "Nitish", age: 25 },
  { fName: "garima", age: 27 }
];
users.forEach(function (user) {
  console.log(user.fName);
});

//-----------------------------------------------------
let data = [1, 2, 3, 4, 5],
  sum = 0;
// Compute the sum of the elements of the array
data.forEach((value) => {
  sum += value;
}); // sum == 15

// Now increment each array element
data.forEach(function (v, i, a) {
  a[i] = v + 1;
}); // data == [2,3,4,5,6]
//-----------------------------------------------------
