const car={
    model:'Fiesta',
    manufacturer:'ford',
    fullName:function(){
        return `${this.manufacturer} ${this.model}`
    }
}
console.log(car.fullName());//Ford Fiesta 
