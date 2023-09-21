//---------------------------------------------------------
let amount = 10;
while (amount > 0) {
  console.log("i have" + amount + "dollars and i'm going to the mall");
  amount--;
}
//  i have10dollars and i'm going to the mall
//  i have9dollars and i'm going to the mall
//  i have8dollars and i'm going to the mall
//  i have7dollars and i'm going to the mall
//  i have6dollars and i'm going to the mall
//  i have5dollars and i'm going to the mall
//  i have4dollars and i'm going to the mall
//  i have3dollars and i'm going to the mall
//  i have2dollars and i'm going to the mall
//  i have1dollars and i'm going to the mall
//---------------------------------------------------------
// Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.
//---------------------------------------------------------
let i = 3;
while (i) {
  // when i becomes 0, the condition becomes falsy, and the loop stops
  alert(i);
  i--;
}
//---------------------------------------------------------
