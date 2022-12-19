//--------------------------VAR SCOPING--------------------
//variables with var are function scoped
//for FOR LOOP ,it will be available outside

for (var i = 0; i < 10; i++) {
  var leak = "I am available outside";
}
console.log(leak); //'I am available outside'

//-----------------------------------------
function myFunc() {
  var functionScoped = "not available";
  console.log(functionScoped); //not available
}
myFunc();
console.log(functionScoped); //reference error

//if variable is redeclared using var, if leaked outside of the block-scope and also changed it in outer-scope

var y='global';

if(y==='global'){
    var y='blocked-scoped';
    console.log(y); //blocked-scoped
}
console.log(y);   //blocked-scoped
//-----------------------------------------
