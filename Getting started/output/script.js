"use strict";
// class
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} is ${this.age} years old and from ${this.country}`);
    }
}
const lamineYamal = new Player("Lamine", 17, "Spain");
const pedri = new Player("Pedri", 22, "Spain");
const players = [];
players.push(lamineYamal);
players.push(pedri);
console.log(players);
// getters and setters
class MyClass {
    constructor() {
        this._myProperty = 0;
    }
    get myProperty() {
        return this._myProperty;
    }
    set myProperty(value) {
        this._myProperty = value;
    }
}
const myInstance = new MyClass();
console.log("instance", myInstance.myProperty);
myInstance.myProperty = 96;
console.log("instance", myInstance.myProperty);
// array
const nums = [1, 4, 2];
// function
function helloBro() {
    return 5 * 9;
}
console.log(helloBro());
// union
const data = {};
// enums
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions[WeatherConditions["Sunny"] = 0] = "Sunny";
    WeatherConditions[WeatherConditions["Rainy"] = 1] = "Rainy";
    WeatherConditions[WeatherConditions["Cloudy"] = 2] = "Cloudy";
})(WeatherConditions || (WeatherConditions = {}));
console.log(WeatherConditions.Rainy);
const examplePerson = {
    fName: "Sam",
    lName: "Altman",
    position: "CEO",
};
const add = (x, y) => x + y;
const substract = (x, y) => x - y;
console.log(add(4, 6));
console.log(substract(4, 6));
class Car {
    start() {
        console.log("Car is Starting....");
    }
    stop() {
        console.log("Car is Stopping...");
    }
}
const myCar = new Car();
myCar.start();
myCar.stop();
