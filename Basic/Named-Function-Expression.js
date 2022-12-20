let sayHi = function func(who) {
  console.log(`hello',${who}`);
};
sayHi("john"); //hello',john
//---------------------------------------
//Named functional Expression uses
//function reference itself internally
//not visible outside of the function
//---------------------------------------

let sayHello = function func(who) {
    if (who) {
      console.log(`Hello,${who}`);
    } else {
      func("guest");
    }
  };
  sayHello(); //Hello,guest
  func(); //error, func is not defined 
//---------------------------------------
