console.log("start");
let id = setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);
console.log("setTimeout id is ", id);
clearTimeout(id);
console.log("script end");
