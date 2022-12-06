const value = 2 > 1;
console.log(typeof value); //boolean

if (value) {
  console.log("hellow worldm");
}
// ------------------------------------------------
const num1 = 4;
const num2 = 6;
const result = num1 >= num2;

if (num1 > num2) {
  console.log("First number is bigger than the second one ");
} else if (result) {
  console.log("first number equals to a second");
} else {
  console.log("hello people");
}

//hello people
// ------------------------------------------------
// ==================EQUALITY-CHECKING============
// ------------------------------------------------

const nu1 = 6;
const nu2 = "6";

const value1 = nu1 == nu2;
const value2 = nu1 === nu2;
console.log(value1); //true
console.log(value2); //false

// ------------------------------------------------
// ==================LOGICAL-OPERATOR============
// ------------------------------------------------
const named = "Bob";
const age = 24;

if (named !== "bob" && age === 24) {
  console.log("hello there user");
} else {
  console.log("wrong values");
}
