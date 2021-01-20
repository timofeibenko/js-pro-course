//--------- ES5----------

function Car(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;
};

// Car methods

Car.prototype.getFullName = function() {
    return `${this.name} ${this.model}`;
};

Car.prototype.getAge = function() {
    let date = new Date();
    return date.getFullYear() - this.year;
};

Car.prototype.changeColor = function(color) {
    if ( color === this.color ) {
        alert(`The car is already painted ${this.color}.`);
        return;
    }
    
    this.color = color;
};

Car.prototype.calculateWay = function(kilometers, fuel) {
    if (fuel < 10) {
        alert('Fuel is less than 10');
    } else {
        let time = kilometers / this.maxSpeed;
        let fuelNeeded = time * this.fuelConsumption

        if(fuelNeeded > fuel) {
            alert(`You'll have to get additional ${fuelNeeded - fuel} units of fuel to get there!`);
        } else {
            alert(`You dont't need extra fuel to get there!`);
        }

        return time
    }
};

// BMW

function BMW(name, model, year, color, maxSpeed, climateControl, fuelCapacity = 60, fuelConsumption = 10) {

    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);

    this.climateControl = climateControl;
};

BMW.prototype = Car.prototype;

BMW.prototype.isUpdateRequred = function() {
    return this.getAge() > 10 ? true : false;
};

// Lada

function Lada(name, model, year, color, maxSpeed, tonirovochka,  fuelCapacity = 60, fuelConsumption = 10) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);

    this.tonirovochka = tonirovochka;
};

Lada.prototype.isLastochka = function() {
    if (this.model === 'Priora') {
        return true;
    } else {
        return false;
    };
};

// Lexus

function Lexus(name, model, year, color, maxSpeed, configuration, fuelCapacity = 60, fuelConsumption = 10) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    
    this.configuration = configuration;
};

Lexus.prototype.getSeatsNumber = function() {
    const configurations = {
        sedan: 5,
        hatchback: 2,
    }
    
    return configurations[this.configuration]
};

// ES5 entities

const car_BMW_ES5 = new BMW('X5', 'deluxe', 2005, 'purple', 200);
const car_lada_ES5 = new Lada('Priora', 'LUHURI', 2010, 'baklajan', 150);
const car_lexus_ES5 = new Lexus('smth', 'idk', 2015, 'pink', 250, 'sedan');

console.log();
console.log(car_lexus_ES5.getSeatsNumber());

//------------ES 6--------------

class CarES6 {
    constructor(name, model, year, color, maxSpeed, configuration, fuelCapacity = 60, fuelConsumption = 10) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
    }

    getFullName() {
        `${this.name} ${this.model}`
    };

    getAge() {
        const date = new Date();
        return date.getFullYear() - this.year;
    };
    
    changeColor(color) {
        color === this.color ? 
        alert(`The car is already painted ${this.color}.`) 
        : this.color = color
    };

    calculateWay(kilometers, fuel) {
        if (fuel < 10) {
            alert('Fuel is less than 10');
        } else {
            const time = kilometers / this.maxSpeed;
            const fuelNeeded = time * this.fuelConsumption

            if (fuelNeeded > fuel) {
                alert(`You'll have to get additional ${fuelNeeded - fuel} units of fuel to get there!`);
            } else {
                alert(`You dont't need extra fuel to get there!`)
            }

            return time
        }
    };
};

class BMWES6 extends CarES6 {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);

        this.climateControl = true;
    };

    isUpdateRequred() {
        return this.getFullYear() > 10 ? true : false;
    }
};

class LadaES6 extends CarES6 {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);

        this.tonirovochka = true;
    };

    isLastochka() {
        this.model === 'Priora' ? true : false
    };
};

class LexusES6 extends CarES6 {
    constructor(name, model, year, color, maxSpeed, configuration, fuelCapacity = 60, fuelConsumption = 10) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);

        this.configuration = configuration;
    };

    getSeatsNumber = () => {
        if (this.configuration === 'sedan') {
            return 5;
        } else if (this.configuration === 'hatchback') {
            return 2;
        }
    };
};

const car_BMW_ES6 = new BMW('X5', 'deluxe', 2005, 'purple', 200);
const car_lada_ES6 = new Lada('Priora', 'LUHURI', 2010, 'baklajan', 150);
const car_lexus_ES6 = new Lexus('smth', 'idk', 2015, 'pink', 250, 'sedan');
