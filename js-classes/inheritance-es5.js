// ES5

function Car(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;

    this.getFullName = function() {
        return `${this.name} ${this.model}`;
    };

    this.getAge = function() {
        var date = new Date();
        return date.getFullYear() - this.year;
    };

    this.changeColor = function(color) {
        color === this.color ? 
        alert(`The car is already painted ${this.color}.`) 
        : this.color = color
    };

    this.calculateWay = function(kilometers, fuel) {
        if (fuel < 10) {
            alert('Fuel is less than 10');
        } else {
            var time = kilometers / this.maxSpeed;
            var fuelNeeded = time * this.fuelConsumption

            fuelNeeded > fuel ? 
            alert(`You'll have to get additional ${fuelNeeded - fuel} units of fuel to get there!`) :
            alert(`You dont't need extra fuel to get there!`)

            return time
        }
    };
};

function BMW(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);

    this.climateControl = true;

    this.isUpdateRequred = function() {
        return this.getFullYear() > 10 ? true : false;
    };
};

function Lada(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);

    this.tonirovochka = true;

    this.isLastochka = function() {
        return this.model === 'Priora' ? alert('Of course, bro') : alert('Nie');
    };
};

function Lexus(name, model, year, color, maxSpeed, configuration, fuelCapacity = 60, fuelConsumption = 10) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);
    
    this.configuration = configuration;
    
    this.getSeatsNumber = function() {
        if (this.configuration === 'sedan') {
            return 5;
        } else if (this.configuration === 'hatchback') {
            return 2;
        }
    };
};

var car_BMW_ES5 = new BMW('X5', 'deluxe', 2005, 'purple', 200);
var car_lada_ES5 = new Lada('Priora', 'LUHURI', 2010, 'baklajan', 150);
var car_lexus_ES5 = new Lexus('smth', 'idk', 2015, 'pink', 250, 'sedan');

// ES 6

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

    getFullName = () => `${this.name} ${this.model}`;

    getAge = () => {
        const date = new Date();
        return date.getFullYear() - this.year;
    };
    
    changeColor = (color) => {
        color === this.color ? 
        alert(`The car is already painted ${this.color}.`) 
        : this.color = color
    };

    calculateWay = (kilometers, fuel) => {
        if (fuel < 10) {
            alert('Fuel is less than 10');
        } else {
            var time = kilometers / this.maxSpeed;
            var fuelNeeded = time * this.fuelConsumption

            fuelNeeded > fuel ? 
            alert(`You'll have to get additional ${fuelNeeded - fuel} units of fuel to get there!`) :
            alert(`You dont't need extra fuel to get there!`)

            return time
        }
    };
};

class BMWES6 extends CarES6 {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);

        this.climateControl = true;
    };

    isUpdateRequred = () => this.getFullYear() > 10 ? true : false;
};

class LadaES6 extends CarES6 {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption);

        this.tonirovochka = true;
    };

    isLastochka = () => this.model === 'Priora' ? alert('Of course, bro') : alert('Nie');
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
