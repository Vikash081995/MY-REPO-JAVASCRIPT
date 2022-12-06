const person = {
    fname: "harsh",
    age: 8,
    about: function () {
      console.log("person name is Harhsit & person age is ", age);
    }
  };
  person.about();
  //----------------------------------------------------------------
  let PersonObj={
    fname:'Mohit',
    age:8,
    about:function(){
        console.log(`person name is ${this.fname} and age is ${this.age}`)
    }
  }
  PersonObj.about();
  //----------------------------------------------------------------
