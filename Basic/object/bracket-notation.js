// /when you access a property of an object with the [] array notation, the name of the property is expressed as a string. Strings are JavaScript datatypes, so they can be manipulated and created while a program is running.
//-----------------------------------------------------------
let addr = "";
for (let i = 0; i < 4; i++) {
  addr += customer[`address${i}`] + "\n";
}
//-----------------------------------------------------------

const key = "email";

const Person = {
  name: "Harshit",
  age: 22,
  "person hobbies": ["guitar", "sleeping", "listening"]
};
console.log(Person["person hobbies"]);
//['guitar', 'sleeping', 'listening']
Person[key] = "vjvikash.com";
console.log(Person);
// {
//     "name": "Harshit",
//     "age": 22,
//     "person hobbies": [
//         "guitar",
//         "sleeping",
//         "listening"
//     ],
//     "email": "vjvikash.com"
// }
