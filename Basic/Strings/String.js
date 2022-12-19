let fname = "abcdefghijkl";
console.log(fname.length);
console.log(fname[fname.length - 2]);

// ======================================
let text = " peter Jordanssssa";
let result = text.length;
console.log(text.length);
console.log(text.toLocaleLowerCase()); // peter jordanssssa
console.log(text.toUpperCase()); // PETER JORDANSSSSA
console.log(text.charAt(0));
console.log(text.charAt(text.length - 1)); //a
console.log(text.indexOf("e")); //2
console.log(text); //peter Jordanssssa
console.log(text.trim()); //peter Jordanssssa
console.log(text.trim().toLowerCase().startsWith("peter")); //true
console.log(text.includes("eter")); //true
console.log(text.slice(0, 2)); //p
console.log(text.slice(-3)); //ssa
// ============================================
// string  concatenation
// ============================================
let string1 = "17";
let string2 = "10";

let newString1 = +string1 + +string2;
console.log(typeof newString1);
//=============================================
//to insert quotes in string use backslash '\'
console.log("i'm the walrus");//i'm the walrus
//=============================================
//searching for a substring 
//=============================================
let str='widget with id';
console.log(str.indexOf('widget')); //0
console.log(str.indexOf('id')); //1