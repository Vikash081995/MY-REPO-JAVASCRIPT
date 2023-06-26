let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let combine = { ...position, ...dimensions };
console.log(combine.x + combine.y + combine.width + combine.height); //175
//--------------------------------------------------------------------------
// If the object that is spread and the object it is being spread into both have a property with the same name, then the value of that property will be the one that comes last:
//--------------------------------------------------------------------------
let o = { x: 1 };
let p = { x: 0, ...o };
console.log(p.x); //1
let q = { ...o, x: 2 };
console.log(q.x); //2
