//Creation of "Car" class that initalizes both make and speed.
class Car{ 
    constructor(make,speed){ 
        this.make = make
        this.speed = speed
    }
    //The accelerate method that adds 10 the speed and logs it
    accelerate(){
        this.speed = this.speed + 10
        console.log(`the new speed is ${this.speed}`)
    }
}
//Testing the class by using the sample object.
let Car1 = new Car("BMW",120);
console.log(Car1.make)
console.log(Car1.speed)
Car1.accelerate()