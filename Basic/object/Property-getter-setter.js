let user = {
  name: "John",
  surname: "Smith",

  get FullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};
console.log(user.FullName); //John Smith

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper
//----------------------------------------------------------------
//Accessor Property
//----------------------------------------------------------------
let user = {
    name: "John",
    surname: "Smith"
  };
  
  Object.defineProperty(user, 'fullName', {
    get() {
      return `${this.name} ${this.surname}`;
    },
  
    set(value) {
      [this.name, this.surname] = value.split(" ");
    }
  });
  
  alert(user.fullName); // John Smith
  
  for(let key in user) alert(key); // name, surname