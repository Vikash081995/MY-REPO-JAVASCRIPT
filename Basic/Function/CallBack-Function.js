function myFunc2(name) {
    console.log("inside my func2");
    console.log(`your name is ${name}`);
  }
  
  function myFunc(callback) {
    console.log("hello there i am func");
    callback("Harsh mehta");
  }
  myFunc(myFunc2);
  //ans:
  //hello there i am func
  //inside my func2
  //your name is Harsh mehta
  