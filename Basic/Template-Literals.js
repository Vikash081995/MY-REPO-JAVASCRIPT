let age = 22;
let fName = "Harshit";
let aboutme = `My name is ${firstName} and age is ${age}`;
console.log(aboutme);
// ============================================
function fullname(firstName, lastName) {
  const fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
}
console.log(fullname("john", "smith")); //JOHN SMITH
console.log(fullname("jordan", "peter")); //JORDAN PETER
// ============================================
//USES oF TEMPLATE STRINGS
//=============================================
//multiline strings
const string = `firstPart \
                     secondPart`;
console.log(string);
//firstPart
//secondPart
//-------------------------------------------
//interpolation
const var1 = "test";
const newVar = `something is defined with ${var1}`;
console.log(newVar); //something is defined with test
//-------------------------------------------
//inside ${ } you can add anything
const varname = `something ${1 + 2 + 3}`;
const strnew = `Somehting ${foo() ? "x" : "Y"}`;
//---------------------------------------------------------------
//Nesting Templates  :- use to nest a template inside another one

const People1 = [
  {
    name: "Alberto",
    age: 27
  },
  {
    name: "caroline",
    age: 27
  },
  {
    name: "Josh",
    age: 31
  }
];

const markup = `<ul>
  ${People1.map((person) => `<li>${person.name}</li>`)}
</ul>`;
console.log(markup);
//   <ul>
//     <li>Alberto</li>,<li>caroline</li>,<li>Josh</li>
//   </ul>
//-------------------------------------------------------