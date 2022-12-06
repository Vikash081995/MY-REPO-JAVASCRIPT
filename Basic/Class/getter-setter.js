//Getter
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1detail = new Person("Harshit", "sharma", 5);
console.log(person1detail.fullName);
//--------------------------------------------------------
//Setter
class Person_1 {
  constructor(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
  }
  set fullName(fullName) {
    const [fName, lName] = fullName.split("");
    this.fName = fName;
    this.lName = lName;
  }
}

const person1 = new Person_1("Harshit", "sharma", 5);
person1.fullName = "Mohit verma";
console.log(person1);
