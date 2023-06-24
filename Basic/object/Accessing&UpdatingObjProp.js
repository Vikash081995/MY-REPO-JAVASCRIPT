//To obtain the value of a property, use the dot (.) or square bracket ([]) operators.If using the dot operator, the righthand side must be a simple identifier that names the property. If using square brackets, the value within the brackets must be an expression that evaluates to a string that contains the desired property name:
//---------------------------------------------------------------------------
let author = book.author; // Get the "author" property of the book.
let name = author.surname; // Get the "surname" property of the author.
let title = book["main title"]; // Get the "main title" property of the book.
//---------------------------------------------------------------------------
// To create or set a property, use a dot or square brackets as you would to query the property, but put them on the lefthand side of an assignment expression:
//---------------------------------------------------------------------------
book.edition = 7; // Create an "edition" property of book.
book["main title"] = "ECMAScript"; // Change the "main title" property.
//---------------------------------------------------------------------------

const Person = {
  name: "Harshit",
  age: 22,
  hobbies: ["guitar", "sleeping", "listening music"]
};
console.log(Person);
//{
//     "name": "Harshit",
//     "age": 22,
//     "hobbies": [
//         "guitar",
//         "sleeping",
//         "listening music"
//     ],
// }
console.log(Person.name); //'Harshit'
console.log(Person["age"]); //22

//add key value pair to objects
Person["gender"] = "male"; //{name:'harshit' ,age:22,hobbies:[...],person:Male}
console.log(Person);
// {
//     "name": "Harshit",
//     "age": 22,
//     "hobbies": [
//         "guitar",
//         "sleeping",
//         "listening music"
//     ],
//     "gender": "male"
// }

// ---------------------------------------------------
//can use multiword property names but must be quoted
//----------------------------------------------------
let user = {
  name: "John",
  age: 30,
  "like birds": true
};
user["like birds"] = true;
console.log(user["like birds"]); //true
//-----------------------------------------------------
// Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows:

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;
