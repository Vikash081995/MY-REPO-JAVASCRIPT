//---------------------------------------------------------------
//When an object is copied-the reference is copied not the object
//---------------------------------------------------------------

let user = {
  name: "John"
};
let admin = user;
console.log(admin); //john
//----------------------------------------------------------------
//can use any of them to access the object and modify its contents
//----------------------------------------------------------------
let user1 = { name: "john" };
let admin1 = user1;
admin1.name = 'pete';
console.log(user1.name); //pete
//------------------------------------------------------------------
