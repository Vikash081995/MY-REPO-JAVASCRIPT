const fruits=['apple','mango','grapes','fruits5'];
const fruits2=[];
for(let index in fruits ){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);