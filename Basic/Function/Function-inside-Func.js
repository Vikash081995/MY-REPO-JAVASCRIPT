function app() {
    const myFunc = () => {
      console.log("Hello");
    };
    const addTwo = (num1, num2) => {
      return num1 + num2;
    };
    console.log("inside app"); 
    myFunc();
    console.log(addTwo(4, 6));
  }
  
  app();
  