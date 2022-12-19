//---------------------------------------------------------------
//str.includes: check if our string includes the value we pass in
//---------------------------------------------------------------
const code = "ABCDEF";
console.log(code.includes("ABB")); //false
console.log(code.includes("abc")); //false
console.log(code.includes("ABC")); //true
//----------------------------------------------------------------
//startswith():check if the string starts with the value we pass in
// ---------------------------------------------------------------
const code1 = "ABCDEFG";
code1.startsWith("ABB"); //false
code1.startsWith("ABC"); //true
// ---------------------------------------------------------------
// endsWith():check if the string ends with the value we pass in
// ---------------------------------------------------------------
const code2 = "ABCDEFG";
code2.endsWith("DDD"); //false
code2.endsWith("def"); //false
code2.endsWith("EFG"); //true
// ---------------------------------------------------------------
//str.slice(start,[end])
// ---------------------------------------------------------------
let str = "stringify";
console.log(str.slice(0, 5)); //strin
console.log(str.slice(0, 1)); //s
//if no 2nd argument is passed, slice goes till end of the string
console.log(str.slice(2));//ringify
// -------------------------------------------------------------------------
//str.substring(start,[end]):returns the part of string,between start and end
// --------------------------------------------------------------------------
let string1="stringify";
console.log(string1.substring(2, 6));//ring 
console.log(string1.substring(6, 2));//ring 
//-----------------------------------------------------------------------------
