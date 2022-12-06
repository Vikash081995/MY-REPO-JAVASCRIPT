
const myVar = "value1";

function myApp() {
  function myFunc() {
    const myFunc2 = () => {
      console.log("inside func2", myVar);
    };
    myFunc2();
  }
  console.log(myVar); 
  myFunc();
}
myApp();
//answer-
// value1
// inside func2 value1
// -------------------------------------------------
