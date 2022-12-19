const car={
    model:'Fiesta',
    manufacturer:'ford',
    fullName:function(){
        return `${this.manufacturer} ${this.model}`
    }
}
console.log(car.fullName());//Ford Fiesta 
// --------------------------------------------
let user ={
    name:'john'
}
let admin ={
    name:'admin'
}
function sayHi(){
    console.log(this.name);
}
user.f = sayHi;
admin.f= sayHi;
user.f(); //john
admin.f(); //admin
//-------------------------------------------------
//Arrow function have no this
let User={
    firstName:'Ilya',
    sayHi(){
        let arrow=()=>console.log(this.firstName);
        arrow();
    }
}
User.sayHi();//Iyla
//--------------------------------------------------
