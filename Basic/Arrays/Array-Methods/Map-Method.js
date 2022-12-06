const numbers = [3, 4, 5, 6, 2, 7];
const squareNumber = numbers.map((number, index) => {
  return index;
});

console.log(squareNumber); //[0, 1, 2, 3, 4, 5]
// =================================================

const users = [
  { fName: "Harsh", age: 34 },
  { fName: "Mohit", age: 21 },
  { fName: "Nitish", age: 34 },
  { fName: "garima", age: 30 }
];
const userNames = users.map((user) => {
  return user.fName;
});

console.log(userNames); //['Harsh', 'Mohit', 'Nitish', 'garima']