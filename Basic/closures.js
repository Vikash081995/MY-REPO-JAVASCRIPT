function outerFunction() {
  function innerFunction() {
    console.log("hellow world");
  }
  return innerFunction;
}

const ans = outerFunction();
ans(); //hellow world
// ------------------------------------
function printFullName(firstName, lastName) {
  function printName() {
    console.log(firstName, lastName);
  }
  return printName;
}

const answer = printFullName("Harsh", "gupta");
answer(); //Harsh gupta
// ------------------------------------------------
