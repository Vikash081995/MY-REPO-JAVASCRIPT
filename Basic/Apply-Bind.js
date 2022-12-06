function about(hobby, favMusician) {
  console.log(this.fname, this.age, hobby, favMusician);
}

const user1 = {
  fname: "Harshit",
  age: 8
};

const user2 = {
  fname: "Raj",
  age: 9
};
about.call(user1, "guitar", "EdSheeran"); //Harshit 8 guitar EdSheeran
about.apply(user1, ["guitar", "arijit"]); //Harshit 8 guitar arijit
const func = about.bind(user2, "guitar", "rajan");
func(); //Raj 9 guitar rajan
// -----------------------------------------------------------------------
const userInfo = {
  fname: "harsh",
  age: 8,
  about: function () {
    console.log(this.fname);
  }
};
//   const myFunc = user1.about;
//   myFunc(); //undefined undefined

const myFunc1 = userInfo.about.bind(userInfo);
myFunc1(); //harsh
//   --------------------------------------------------

const userInfo1 = {
  fName: "Harsh",
  age: 8,
  about: () => {
    console.log(this.fName, this.age);
  }
};
userInfo1.about(); //undefined undefined 