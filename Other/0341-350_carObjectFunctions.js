const car = {
    color: 'red',
    brand: 'Mercedes',
    mileage: 10,
    kilometers: 600,
    serviceDates: [2000, 2001, 2002],
    fuel: 40,
    broken: false,
}

//341
car.printDetails = function(){
    console.log(`This car is ${this.color} ${this.brand}`);
}

//342
car.drive = function(distance){
    if(this.broken) return console.log(`Car broken! Cannot drive!`);
    let fuelRequired = distance/100 * this.mileage;
    if(fuelRequired > this.fuel){
        return console.log(`Not enough fuel! Please tank up.`);
    }else{
        this.kilometers += distance;
        this.fuel -= fuelRequired;
        console.log(`I drove ${distance} km`);
    }
}

//343
car.printDrivenKilometers = function(){
    console.log(`This car has driven ${this.kilometers} km`)
}

//344
car.printAvailableFuel = function(){
    console.log(`Available fuel: ${this.fuel} l`);
}

//345
car.refill = function(){
    this.fuel = 70;
}

//346
car.addService = function(year){
    this.serviceDates.push(year);
}

//347
car.printServiceDates = function(){
    console.log(`${this.serviceDates.join(' ')}`)
}

//348
car.crash = function(){
    this.broken = true;
    console.log(`We had a car crash!`);
}

//349
car.repair = function(){
    this.broken = false;
    console.log(`Car repaired!`);
}

//350
car.paint = function (color){
    this.color = color;
}

car.printDetails();
car.printAvailableFuel();
car.refill();
car.drive(300);
car.printDrivenKilometers();
car.addService(2005);
car.printServiceDates();
car.crash();
car.drive(300);
car.repair();
car.drive(300);
car.drive(300);
car.paint('black');
car.printDetails();