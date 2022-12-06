const myArray = ["Hello", "Cat", "dog", "Lion"];
function isLength3(string) {
  return string.length === 3;
}
const ans = myArray.find(isLength3);
console.log(ans); //cat

// --------------------------------------------------
const users = [
  { userId: 1, userName: "Harshit" },
  { userId: 2, userName: "Mohit" },
  { userId: 3, userName: "Nitish" },
  { userId: 4, userName: "Aditya" }
];

const myUser = users.find((user) => user.userId === 3);
console.log(myUser); //{userId: 3, userName: 'Nitish'}
// --------------------------------------------------

