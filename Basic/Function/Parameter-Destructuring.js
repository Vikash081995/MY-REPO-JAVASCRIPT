const Person = {
    fName: "harshit",
    gender: "male",
    age: 500
  };
  
  function printDetails({ fName, gender, age }) {
    console.log(fName); //harshit
    console.log(gender); //male
    console.log(age);//500
  }
  printDetails(Person);
  