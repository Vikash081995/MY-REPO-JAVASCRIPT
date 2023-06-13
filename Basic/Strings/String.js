//strings are enclosed within either single qutes ,double quotes or backticks.
let str24 = "Hello";
let str2 = "Single Quote string";

let single = "singlequote";
let backtick = `stringwithbacktick`;
//==================================================
(""); // The empty string: it has zero characters
("testing");
("3.14");
('name="myform"');
("Wouldn't you prefer O'Reilly's book?");
("τ is the ratio of a circle's circumference to its radius");

// A string representing 2 lines written on one line:
("two\nlines");

// A one-line string written on 3 lines:
"one\
 long\
 line" // A two-line string written on two lines:
`the newline character at the end of this line
is included literally in this string`;
//=================================================
// Accessing Characters : use charAt(position)
//=================================================
let strHello = "Hello";
console.log(strHello.charAt(0)); //H
//=================================================
// difference between Square Brackets and charAt
//=================================================
//if no character is found , [ ] return undfined , charAt return empty string ("").
let strName ="Hello";
console.log(strName[10]); //undefined
console.log(strName.charAt(10)); // ""
// ======================================
// string  concatenation
// ============================================
let string1 = "17";
let string2 = "10";

let newString1 = +string1 + +string2;
console.log(typeof newString1); //number
console.log(newString1); //27
//=============================================
