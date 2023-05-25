function myFunc2(name) {
  console.log("inside my func2");
  console.log(`your name is ${name}`);
}

function myFunc(callback) {
  console.log("Hello there i am a func");
  callback("Harshit");
}
myFunc(myFunc2);
//Hello there i am a func
//inside my myFunc2
//your name is Harshit
//-------------------------------------------