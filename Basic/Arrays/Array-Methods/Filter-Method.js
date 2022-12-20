//looks for a single element and returns true
//filter continues to iterate for all array elements even if true is returned already
// ===============================================================================
const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers); //[2, 4, 6]
//=================================================================================
let users = [
    { id: 1, name: "john" },
    { id: 2, name: "peter" },
    { id: 3, name: "mary" }
  ];
  let someUsers = users.filter((item) => item.id < 3);
  console.log(someUsers);
  //{id:1,name:'john'}
  //{id:2,name:'peter'}
  console.log(someUsers.length); //2
//=================================================================================

  