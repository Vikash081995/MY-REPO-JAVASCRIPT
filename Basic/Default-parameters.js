function addTwo(a, b = 1) {
  return a + b;
}

const ans = addTwo(4,8);
console.log(ans); //12
const sum = addTwo(4);
console.log(sum);//5
//----------------------------------
