const Hi = () => {
  console.log("hello  world");
};
Hi();
// ----------------------------------------
const isEven = (number) => number % 2 === 0;
console.log(isEven(4)); //true
//-------------------------------------------------
//For only one argument ,parenthesis can be omitted
//-------------------------------------------------
let double = (n) => n * 2;
console.log(double(3)); //6
//-------------------------------------------------
//for No argument parenthesis should be empty 
//-------------------------------------------------
let sayHi =()=> console.log("hello");
sayHi();
//---------------------------------------------------------
//Arrow function allow you to have an implicit return value
//---------------------------------------------------------
const myFunction=()=>'test';
myFunction();
//----------------------------------------------------------
//Can pass arguments to an arrow function via parameters
//----------------------------------------------------------
let x=(arg1,arg2)=>{
  console.log(arg1,arg2)
};
x(1,2);