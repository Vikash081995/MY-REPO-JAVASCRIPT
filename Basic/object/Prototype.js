function hello() {
  console.log("Hello World");
}

console.log(hello.name); //hello

//add your own function
hello.myownProperty = "very unique value";
console.log(hello.myownProperty);
//function provides more useFull properties
console.log(hello.prototype); //{}

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function () {
  return "abc.............";
};

console.log(hello.prototype); //{abc: 'abc', xyz: 'xyz', sing: ƒ, constructor: ƒ}
