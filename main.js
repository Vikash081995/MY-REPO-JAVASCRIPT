let user = {
    name: "John",
    age: 30
  };
  
  //   Object.keys(user) = ["name", "age"]
  //   Object.values(user) = ["John", 30]
  //   Object.entries(user) = [ ["name","John"], ["age",30] ]
  
  for (let value of Object.values(user)) {
    console.log(value);
  }
  //John
//30
  