const band = {
  bandName: "EdPlay",
  famousSong: "stringwars",
  year: 1978,
  singer: "edsheeran"
};

let { bandName, famousSong, ...restProps } = band;
console.log(bandName); //EdPlay
console.log(famousSong); //stringwars
console.log(restProps); //{year: 1978, singer: 'edsheeran'}
//----------------------------------------------------
//to assign a property to a variable with another name
//----------------------------------------------------

let options = {
  title: "Menu",
  width: 100,
  height: 200
};
let { width: w, height: h, title } = options;
console.log(title); ///Menu
console.log(w); //100
console.log(h); //200
//----------------------------------------------------
//missing properties can be set default value using
//----------------------------------------------------
let option = {
  title1: "Menu"
};

let { width = 100, height = 200, title1 } = option;
console.log(title1); //Menu
console.log(width); //100
