// WEEK 5 HOMEWORK: 
/*
Question 1: Create a constructor for a Car object. Each Car object should contain the 
following properties: model, year, color, and mpg. Use the constructor to create 3 different 
Car objects. Print out the mpg of each car to the console. 
*/

// Your code here! 
function Car(model, year, color, mpg){
    this.model = model;
    this.year = year;
    this.color = color;
    this.mpg = mpg;
}

let mustang = new Car("Ford Mustang", 2025, "Light-Blue", 16);
let brokenCamry = new Car("Toyota Camry", 2005, "Grey", 26);
let magicCarper = new Car("Toyota Rav4", 2018, "Black", 24);

console.log(mustang.color);
/*
Question 2: Create a constructor for a Vehicle object. Each Vehicle object should contain only 
one property: car. Using the 3 Car objects you created previously, create 3 Vehicle objects. 
Print out the mpg of the car property in each Vehicle object.
*/
function Vehicle(car, broken){
    this.car = car;
    this.broken = broken;
}

let brokenCamryVehicle = new Vehicle(brokenCamry, true);
console.log(brokenCamryVehicle);
console.log(brokenCamryVehicle.car.model);

// Your code here! 

