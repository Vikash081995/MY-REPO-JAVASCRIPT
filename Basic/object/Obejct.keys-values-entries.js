//Object.keys(obj) : returns an array of keys
//Object.values(obj): returns an array of values
//Objet.entries(obj): returns an array of [key,value]
//--------------------------------------------------------------------------
let user = {
  name: "John",
  age: 30
};
for (let value of Object.values(user)) {
  console.log(value);
}
//john
//30
//--------------------------------------------------------------------------
// Object.fromEntries to transform objects
// it creates an object from array of [key,value] pairs
//--------------------------------------------------------------------------
let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4]
]);
console.log(prices);//{banana: 1, orange: 2, meat: 4}
console.log(prices.orange); //2
// ---------------------------------------------------------------------------
let price1 = {
  banana: 1,
  orange: 2,
  meat: 4
};

let doublePrices = {};
for (let [product, price] of Object.entries(price1)) {
  doublePrices[product] = price * 2;
}
console.log(doublePrices.meat); //8
// ---------------------------------------------------------------------------
let price = {
  banana: 1,
  orange: 2,
  meat: 4
};
let doublePrice = Object.fromEntries(
  Object.entries(price).map(([key, value]) => [key, value * 2])
);
console.log(doublePrice);
//{banana: 2, orange: 4, meat: 8}
// ---------------------------------------------------------------------------

