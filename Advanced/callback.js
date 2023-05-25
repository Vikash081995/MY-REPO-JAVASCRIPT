function myFunc(callback) {
  console.log("function is doing task1");
  callback();
}

function myFunc2() {
  console.log("function is doing task2");
}

myFunc(myFunc2);
//function is doing task1
//function is doing task2
// ----------------------------------------
function getTowNumberSum(num1, num2, onSuccess, onFailure) {
    if (typeof num1 === "number" && typeof num2 === "number") {
      onSuccess(num1, num2);
    } else {
      onFailure();
    }
  }
  function addTwonum(num1, num2) {
    console.log(num1 + num2);
  }
  
  function onFail() {
    console.log("wrong data type");
    console.log("please pass number only");
  }
  
  getTowNumberSum(4, 4, addTwonum, onFail); //8
// ----------------------------------------
  