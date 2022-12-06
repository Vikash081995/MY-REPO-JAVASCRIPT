const Hi = function () {
  console.log("hello  world");
};
Hi();
// -------------------------------
const isEven = function (number) {
  return number % 2 === 0;
};
console.log(isEven(2)); //true
// -------------------------------
function calculateTotal(subTotal, tax) {
  const total = subTotal + tax;
  return total;
}

console.log(calculateTotal(200, 20)); //220
// ---------------------------------
