function myFunc(a, b, ...c) {
    console.log(a); //2
    console.log(b); //3
    console.log(c); //[4,5,6,7,88]
  }
  myFunc(2, 3, 4, 5, 6, 7, 88);
  // ------------------------------------
  function addAll(...numbers) {
    let total = 0;
    for (let number of numbers) {
      total = total + number;
    }
    return total;
  }
  
  const ans = addAll(4, 5, 6, 7, 8, 2);
  console.log(ans); //32
  //----------------------------------------
  