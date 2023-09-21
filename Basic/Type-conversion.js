// The simplest way to perform an explicit type conversion is to use the Boolean(), Number(), and String() functions:
//============================================
//string to Number :Number() method
Number("3.14"); //3.14
Number(""); //0
Number("99 99"); //NaN
let y = "5";
let x = +y;
console.log(x); //5
//============================================
//Number to string : String() method ,toString Method
console.log(String(123));
(123).toString(); //"123"
//============================================
// If one operand of the + operator is a string, it converts the other one to a string. The unary + operator converts its operand to a number. And the unary ! operator converts its operand to a boolean and negates it.
x +
  "" + // => String(x)
  x; // => Number(x)
x - 0; // => Number(x)
!!x; // => Boolean(x): Note double !
//============================================
//Numeric conversions
//============================================
alert("6" / "2"); // 3, strings are converted to numbers

let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

//If the string is not a valid number, the result of such a conversion is NaN
let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed
//============================================
//Boolean Conversions
//============================================
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
//Please note: the string with zero "0" is true