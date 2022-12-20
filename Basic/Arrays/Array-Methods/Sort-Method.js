// sort:sort the array in the place 
// ------------------------------------------------
const numbers = [5, 9, 1200, 410, 3000];
numbers.sort();
console.log(numbers); //[1200, 3000, 410, 5, 9]
// ------------------------------------------------
const userNames = ["harshit", "abcd", "Mohit", "Nitish"];
userNames.sort();
console.log(userNames); //['Mohit', 'Nitish', 'abcd', 'harshit']
// ---------------------------------------------------

const numbers1 = [5, 9, 1200, 410, 3000];
numbers1.sort((a, b) => {
  return a - b;
});
console.log(numbers1); //[5, 9, 410, 1200, 3000]
// ---------------------------------------------------
const products = [
  { productId: 1, productName: "p1", price: 300 },
  { productId: 6, productName: "p", price: 400 },
  { productId: 4, productName: "x1", price: 700 },
  { productId: 2, productName: "px", price: 900 },
  { productId: 0, productName: "p16", price: 700 }
];

const LowToHigh = products.slice(0).sort((a, b) => {
  return a.price - b.price;
});
console.log(LowToHigh);

// {productId: 1, productName: 'p1', price: 300}
// {productId: 6, productName: 'p', price: 400}
// {productId: 4, productName: 'x1', price: 700}
// {productId: 0, productName: 'p16', price: 700}
// {productId: 2, productName: 'px', price: 900}

// -------------------------------------------------------
const Users = [
  { fname: "Harshit", age: 33 },
  { fname: "Mohit", age: 21 },
  { fname: "Nitishit", age: 67 },
  { fname: "Hgarima", age: 33 }
];
Users.sort((a, b) => {
  if (a.fname > b.fname) {
    return 1;
  } else {
    return -1;
  }
});
console.log(Users);
//{ fname: "Harshit", age: 33 }
// { fname: "Hgarima", age: 33}
// { fname: "Mohit", age: 21}
//  { fname: "Nitishit", age: 67}
// -------------------------------------------------------
