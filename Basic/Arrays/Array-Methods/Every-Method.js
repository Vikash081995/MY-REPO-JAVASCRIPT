const numbers = [2, 4, 6, 7, 8, 9, 10];
const ans = numbers.every((num) => num % 2 === 0);
console.log(ans); //false
// -----------------------------------------------

const userCart = [
  { productId: 1, productname: "Mobile", price: 12000 },
  { productId: 2, productname: "Laptop", price: 22000 },
  { productId: 3, productname: "tv", price: 35000 }
];

const answer = userCart.every((cartItem) => cartItem.price < 40000);
console.log(answer); //TRUE
// -----------------------------------------------
