let store = { drivers: [], passengers: [], trips: [] };
let driverId = 0;
let passengersID=0;

class Driver{
  constructor(name) {
    this.name = name;
    this.id = driverId++;
    store.drivers.push(this);
  }
  trips(){
    return this
  }
}

class Passenger{
  constructor(name) {
    this.name = name;
    this.id = passengerId++;
    store.passengers.push(this);
  }
}
