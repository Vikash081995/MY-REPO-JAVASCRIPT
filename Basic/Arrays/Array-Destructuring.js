// Array destructuring
// ========================
const  myArray=['value1','value2','value3','value4'];

const [myArr1,myarr2,...myNewArr]= myArray;
console.log('value of myvar1',myArr1);
console.log('value of myvar1',myarr2);
console.log(myNewArr);