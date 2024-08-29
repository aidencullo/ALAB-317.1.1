// @ts-check

type StatusUnion = "started" | "stopped";

class Vehicle {
    status: StatusUnion = "stopped";
    make: string;
    model: string;
    wheels: number;

    constructor(make: string, model: string, wheels: number) {
	this.make = make;
	this.model = model;
	this.wheels = wheels;
    }
    start() {
	this.status = "started";
    }
    stop() {
	this.status = "stopped";
    }
}

class Car extends Vehicle {
    constructor(make: string, model: string) {
	super(make, model, 4);
    }
}

class MotorCycle extends Vehicle {
    constructor(make: string, model: string) {
	super(make, model, 2);
    }
}

function printStatus(vehicle: Vehicle) {
    if (vehicle.status === "started") {
	console.log("The vehicle is running.");
    } else {
	console.log("The vehicle is stopped.");
    }
}

const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());

const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);



// Part 3: Creating a Generic Class
// Create a new class following the existing code, called NCycle.
// Copy the existing Vehicle class definition as a starting point for NCycle.
// Modify NCycle to accept a generic type.
// Allow make and model to have either the generic type or an array of the generic type.
// Adjust the constructor parameters accordingly.
// Create a new method print, which returns nothing and has a single number parameter (either optional or defaulted to 0).
// Use type guards and other appropriate techniques to implement print such that it logs:
// "This is a <make> <model> NCycle." if make and model are not arrays.
// "This NCycle has a <make> <model> at <parameter>." if make and model are arrays and the index of parameter exists in each.
// "This NCycle was not created properly." if neither of the above are true.
// Create a new method printAll, which returns nothing and has no parameters.
// Use type guards and appropriate techniques to implement printAll such that it logs the same statements as print, but for all matching pairs in the make and model arrays, if applicable.

class NCycle<T> {
    status: StatusUnion = "stopped";
    make: T | T[];
    model: T | T[];
    wheels: number;

    constructor(make: T | T[], model: T | T[], wheels: number) {
	this.make = make;
	this.model = model;
	this.wheels = wheels;
    }
    start() {
	this.status = "started";
    }
    stop() {
	this.status = "stopped";
    }
    print(parameter?: number) {
	if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
	    console.log(`This is a ${this.make} ${this.model} NCycle.`);
	} else if (Array.isArray(this.make) && Array.isArray(this.model) && parameter && parameter > 0 && parameter <= this.make.length && parameter <= this.model.length) {
	    console.log(`This NCycle has a ${this.make[parameter]} ${this.model[parameter]} at ${parameter}.`);
	} else {
	    console.log("This NCycle was not created properly.");
	}
    }
}

const myNCycle = new NCycle("Giant", "Talon", 2);
myNCycle.print();
const myNCycle2 = new NCycle(["Giant", "Trek"], ["Talon", "Marlin"], 2);
myNCycle2.print(1);
myNCycle2.print(2);
myNCycle2.print(3);
