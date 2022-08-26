//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")


class Car extends VehicleModule {
    constructor(make, model, mileage, bodyType, color, year) {
        super(make, model, mileage, bodyType, color, year);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num) {
        if(this.passenger < this.maxPassengers) {
            if((num + this.passenger) <= this.maxPassenger) {
                this.passenger = num;
                return this.passenger;

            } else {
                console.log(this.model + " " + this.make + " does not have enough space to accept all passengers.")
            }
        } else {
            console.log(this.model + " " + this.make + " is full")
        }

    }

    startCar() {
        if(this.fuel > 0) {
            console.log("You engine has started!")
        } else {
            console.log("You are out of gas.")
        }
    }

    oilChange(milesSinceLastChange, monthsSinceLastChange) {
        if(milesSinceLastChange > 6000 && monthsSinceLastChange > 6) {
            console.log("Your oil needs to be Changed!")
        } else {
            console.log("Your oil is clean!")
        }

    }

    

}



let v = new VehicleModule.Vehicle('mercury', 'rad_sedan', 50000, sedan, white, 2002)

v.loadPassenger(5)
v.startCar()
v.oilChange()

console.log(v)
