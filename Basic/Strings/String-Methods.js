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
let s = "Hello, world"; // Start with some text.

// Obtaining portions of a string
s.substring(1,4)        // => "ell": the 2nd, 3rd, and 4th characters.
s.slice(1,4)            // => "ell": same thing
s.slice(-3)             // => "rld": last 3 characters
s.split(", ")           // => ["Hello", "world"]: split at delimiter string

// Searching a string
s.indexOf("l")          // => 2: position of first letter l
s.indexOf("l", 3)       // => 3: position of first "l" at or after 3
s.indexOf("zz")         // => -1: s does not include the substring "zz"
s.lastIndexOf("l")      // => 10: position of last letter l

// Boolean searching functions in ES6 and later
s.startsWith("Hell")    // => true: the string starts with these
s.endsWith("!")         // => false: s does not end with that
s.includes("or")        // => true: s includes substring "or"

// Creating modified versions of a string
s.replace("llo", "ya")  // => "Heya, world"
s.toLowerCase()         // => "hello, world"
s.toUpperCase()         // => "HELLO, WORLD"
s.normalize()           // Unicode NFC normalization: ES6
s.normalize("NFD")      // NFD normalization. Also "NFKC", "NFKD"

// Inspecting individual (16-bit) characters of a string
s.charAt(0)             // => "H": the first character
s.charAt(s.length-1)    // => "d": the last character
s.charCodeAt(0)         // => 72: 16-bit number at the specified position
s.codePointAt(0)        // => 72: ES6, works for codepoints > 16 bits

// String padding functions in ES2017
"x".padStart(3)         // => "  x": add spaces on the left to a length of 3
"x".padEnd(3)           // => "x  ": add spaces on the right to a length of 3
"x".padStart(3, "*")    // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-")      // => "x--": add dashes on the right to a length of 3

// Space trimming functions. trim() is ES5; others ES2019
" test ".trim()         // => "test": remove spaces at start and end
" test ".trimStart()    // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd()      // => " test": remove spaces at right. Also trimRight

// Miscellaneous string methods
s.concat("!")           // => "Hello, world!": just use + operator instead
"<>".repeat(5)          // => "<><><><><>": concatenate n copies. ES6
//-----------------------------------------------------------------------------
