let arr = [1, 0, false];
//indexOf(item,from):- look for item from index from and returns the index where found otherwise -1
console.log(arr.indexOf(0)); //1
//lastIndexOf(item,from):-same,but looks from right to left
console.log(arr.indexOf(false)); //2
//Includes(item,from):-looks for item starting index from and returns true if found
console.log(arr.includes(1)); //true
//find:-
let users = [
    { id: 1, name: "john" },
    { id: 2, name: "pete" },
    { id: 3, name: "mary" }
  ];
  let user = users.find((item) => item.id == 1);
  console.log(user.name); //john
  