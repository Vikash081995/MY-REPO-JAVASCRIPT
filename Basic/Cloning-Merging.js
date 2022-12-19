//---------------------------------------------------------------------------------------------------------------------
//create a new object and replicate the structure of the existing one by iterating over its properties and copying them on the primitive level
//---------------------------------------------------------------------------------------------------------------------
let User = {
  name: "john",
  age: 30
};
let clone = {};
for (let key in User) {
  clone[key] = User[key];
}
clone.name = "pete";
console.log(User.name); //john
console.log(clone.name); //pete
//--------------------------------------------------------------------------------------
// Object.assign :copies the properties of all objects from source to destination
//--------------------------------------------------------------------------------------
let user = {
  name: "john"
};

let permission1 = {
  canView: true
};
let permission2 = {
  canEdit: true
};
let obj3 = Object.assign(user, permission1, permission2);
console.log(obj3); //{name: 'john', canView: true, canEdit: true}
//------------------------------------------------------------------------------
//if receiving object already has the same named property,it will be overwritten

let newuser = {
  name: "john"
};
const clonedObj = Object.assign(newuser, { name: "pete", isAdmin: true });
console.log(clonedObj); //{name: 'pete', isAdmin: true}
//------------------------------------------------------------------------------
//properties can be referenced to other object
let User1={
  name:'john',
  sizes:{
    height:182,
    width:50
  }
}
console.log(User1.sizes.height);//182
//------------------------------------------------------------------------------
