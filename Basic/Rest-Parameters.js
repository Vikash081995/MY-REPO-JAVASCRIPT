let [name1, name2, ...rest] = [
  "julius",
  "ceasar",
  "counsal",
  "of the roman republic"
];
console.log(name1); //julius
console.log(name2); //ceasar
//to rplace missing one with 'default values' use =
let [name = "guest", surname = "ananymous"] = ["julius"];
console.log(name); //julius
console.log(surname); //ananymous

//-------------------------------------------
function myFunc(a, b, ...c) {
  console.log(`a is ${a}`); //a is 1
  console.log(`b is ${b}`); //b is 2
  console.log(`c is ${c}`); //c is [3,4,5]
}
myFunc(1, 2, 3, 4, 5);
//-------------------------------------------
function addAll(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  return total;
}
const ans = addAll(4, 5, 4, 2, 10);
console.log(ans); //25
//-------------------------------------------
