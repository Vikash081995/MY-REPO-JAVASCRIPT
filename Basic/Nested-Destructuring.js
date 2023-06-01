const users = [
  { userId: 1, fName: "Raj", gender: "M" },
  { userId: 2, fName: "kar", gender: "F" },
  { userId: 3, fName: "kirti", gender: "F" }
];

const [{ fName: user1Fname, userId }, , { gender: User3gender }] = users;
console.log(user1Fname); //Raj
console.log(userId); //1
console.log(User3gender); //F
// ---------------------------------------------------------
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["cake", "donut"],
  extra: true
};
let {
  size: { width, height },
  items: [item1, item2],
  title = "Menu"
} = options;
console.log(title);//Menu 
console.log(width);//100
console.log(height);//200
console.log(item1);//cake 
// ---------------------------------------------------------
//nested destructuring array
let location =['Atlanta',[33.7490,84.3880]];
let [place,[lat,lng]]=location;
console.log(place); //'Atlanta'
console.log(lat);  //33.7490
// ---------------------------------------------------------
