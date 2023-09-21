//four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing)
//==================================================
//OR(||)
//==================================================
alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false
//----------------------------------
if (1 || 0) {
  // works just like if( true || false )
  alert("truthy!");
}
//--------------------------------------
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert("The office is closed."); // it is the weekend
}
//--------------------------------------
//Getting the first truthy value from a list of variables or expressions.
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert(firstName || lastName || nickName || "Anonymous"); // SuperCoder
//--------------------------------------
//Short-circuit evaluation.
//--------------------------------------
true || alert("not printed");
false || alert("printed"); //"printed"
//==================================================
//&& (AND)
//==================================================
alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false
//----------------------------------------------------
let hours = 12;
let minute = 30;

if (hours == 12 && minute == 30) {
  alert("The time is 12:30");
}
//----------------------------------------------------
if (1 && 0) {
  // evaluated as true && false
  alert("won't work, because the result is falsy");
}
//----------------------------------------------------
// if the first operand is truthy,
// AND returns the second operand:
alert(1 && 0); // 0
alert(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert(null && 5); // null
alert(0 && "no matter what"); // 0
//=====================================================
// NOT(!)
//=====================================================
alert(!true); // false
alert(!0); // true
//----------------------------------------------------
//A double NOT !! is sometimes used for converting a value to boolean type:

alert(!!"non-empty string"); // true
alert(!!null); // false
//=====================================================
// Nullish coalescing operator '??'
//=====================================================
//result = a ?? b ⇒ result = (a !== null && a !== undefined) ? a : b;
let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)
//--------------------------------------------------------------
let user1 = "John";

alert(user1 ?? "Anonymous"); // John (user is not null/undefined)
//---------------------------------------------------------------
let firstName1 = null;
let lastName1 = null;
let nickName1 = "Supercoder";

// shows the first defined value:
alert(firstName1 ?? lastName1 ?? nickName1 ?? "Anonymous"); // Supercoder
//=====================================================
//Using ?? with && or ||
//=====================================================
//let x = 1 && 2 ?? 3; // Syntax error
let x = (1 && 2) ?? 3; // Works

alert(x); // 2
