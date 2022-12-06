// How to iterarte objects================
const Person = {
    name: "Harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening"]
  };
  
  // method1
  for (let key in Person) {
    console.log(`${key}:${Person[key]}`);
    console.log(key, ":", Person[key]);
  }
  // method2
  for (let key of  Object.keys(Person)) {
    console.log(Person[key]);
  }
  