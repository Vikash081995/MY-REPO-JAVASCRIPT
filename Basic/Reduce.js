//Reduce:- they are used to calculate a single value based on the array
//syntax:-arr.reduce(function(previousValue,item,index,array){},initialValue)
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => {
  return sum + current;
}, 0);
console.log(result); //15
