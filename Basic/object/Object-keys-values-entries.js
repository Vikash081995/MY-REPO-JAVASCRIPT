let user = {
  name: "John",
  age: 30
};

//   Object.keys(user) = ["name", "age"]
//   Object.values(user) = ["John", 30]
//   Object.entries(user) = [ ["name","John"], ["age",30] ]

for (let value of Object.values(user)) {
  console.log(value);
}
// john 30
//------------------------------------------------------------
let prices = {
  banana: 1,
  orange: 2,
  meat: 4
};

let doublePrices = Object.fromEntries(
  // convert prices to array, map each key/value pair into another pair
  // and then fromEntries gives back the object
  Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
);

alert(doublePrices.meat); // 8
//------------------------------------------------------------
