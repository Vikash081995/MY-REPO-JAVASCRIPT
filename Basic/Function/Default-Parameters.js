//===========================================
// Default Parameters
//===========================================
function addTwo(a, b = 1) {
  return a + b;
}
const ans = addTwo(4, 8);
console.log(ans); //12
const sum = addTwo(4);
console.log(sum); //5
//----------------------------------
function showMessage(from, text = "no text given") {
  alert(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given
//===========================================
// Alternative default parameters
//===========================================
function showMessage(text) {
  // ...

  if (text === undefined) {
    // if the parameter is missing
    text = "empty message";
  }

  alert(text);
}

showMessage(); // empty message
//-------------------------------------
//using nullish coalesing operator
function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unkno
