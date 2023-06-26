let id = Symbol();
//-------------------------------------------------------------
//symbol with description
let id1 = Symbol("id");
//-------------------------------------------------------------
//Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, they are different values
let id2 = Symbol("id");
console.log(id1 == id2); //false
//-------------------------------------------------------------
//Symbols allow us to create “hidden” properties of an object, that no other part of code can accidentally access or overwrite.
//-------------------------------------------------------------
let user = {
  name: "John"
};
let id3 = Symbol("id");
user[id] = 1;
console.log(user[id3]); // we can access the data using the symbol as the key
//--------------------------------------------------------------
//If we want to use a symbol in an object literal {...}, we need square brackets around it.
let id8 = Symbol("id");
let user23 = {
  name: "john",
  [id8]: 123
};
//--------------------------------------------------------------
