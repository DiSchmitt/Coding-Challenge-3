//Creation of "Car" class that initalizes both make and speed.
class Car{ 
    constructor(make,speed){ 
        this.make = make
        this.speed = speed
    }
}
//Testing the class by making a sample object.
let Car1 = new Car("BMW","120km/h");
console.log(Car1.make)