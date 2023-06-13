// The simplest way to perform an explicit type conversion is to use the Boolean(), Number(), and String() functions:
//============================================
//string to Number :Number() method
Number("3.14");  //3.14
Number("");  //0
Number("99 99") //NaN
let y="5"
let x=+y;
console.log(x) //5
//============================================
//Number to string : String() method ,toString Method
console.log(String(123));
(123).toString() //"123"
//============================================
// If one operand of the + operator is a string, it converts the other one to a string. The unary + operator converts its operand to a number. And the unary ! operator converts its operand to a boolean and negates it.
x + ""   // => String(x)
+x       // => Number(x)
x-0      // => Number(x)
!!x      // => Boolean(x): Note double !