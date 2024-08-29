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
	} else if (
	    Array.isArray(this.make) &&
		Array.isArray(this.model) &&
		parameter &&
		this.make[parameter] &&
		this.model[parameter]
	) {
	    console.log(`This NCycle has a ${this.make[parameter]} ${this.model[parameter]} at ${parameter}.`);
	} else {
	    console.log("This NCycle was not created properly.");
	}
    }
    printAll() {
	if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
	    console.log(`This is a ${this.make} ${this.model} NCycle.`);
	} else if(Array.isArray(this.make) && Array.isArray(this.model)) {
	    for (let i = 0; i < Math.min(this.make.length, this.model.length); i++) {
		console.log(`This NCycle has a ${this.make[i]} ${this.model[i]} at ${i}.`);
	    }
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
