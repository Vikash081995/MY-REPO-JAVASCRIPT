const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
});
console.log(sum); //15
// --------------------------------------------------=
const userCart = [
  { productId: 1, productName: "Mobile", price: 12000 },
  { productId: 2, productName: "Laptop", price: 14000 },
  { productId: 3, productName: "Tv", price: 20000 }
];

const a = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);
console.log(a); //46000
// --------------------------------------------------
