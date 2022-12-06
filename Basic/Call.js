function Hello() {
    console.log("Hellow world");
  }
  Hello.call(); //Hellow world
  // ------------------------------
  const user1 = {
    fName: "Harshit",
    age: 8,
    about: function () {
      console.log("I am " + this.fName + " and I am " + this.age + " years old");
    }
  };
  
  const user2 = {
    fName: "mohit",
    age: 8
  };
  
  user1.about.call(user2); //I am mohit and I am 8 years old
  // ------------------------------
  
  