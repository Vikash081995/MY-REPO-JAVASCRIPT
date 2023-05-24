const Person = {
  fName: "Harshit",
  gender: "male",
  age: 500
};

function printDetails({ fName, gender, age }) {
  console.log(fName); //Harshit
  console.log(gender); //Male
  console.log(age); //500
}

printDetails(Person);
