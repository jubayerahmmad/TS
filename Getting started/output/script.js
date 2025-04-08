"use strict";
// -----CLASS-------
// A class is a blueprint for creating objects. It can have properties and methods.
// Access modifiers (public, private, protected) control the visibility of class members.
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    // A method to display player details
    play() {
        console.log(`${this.name} is ${this.age} years old and from ${this.country}`);
    }
}
// Creating instances of the Player class
const lamineYamal = new Player("Lamine", 17, "Spain");
const pedri = new Player("Pedri", 22, "Spain");
// Storing players in an array
const players = [];
players.push(lamineYamal);
players.push(pedri);
console.log(players);
// -----GETTERS AND SETTERS-----
// Getters and setters allow controlled access to private properties.
class MyClass {
    constructor() {
        this._myProperty = 0; // Private property
    }
    // Getter to retrieve the value of _myProperty
    get myProperty() {
        return this._myProperty;
    }
    // Setter to update the value of _myProperty
    set myProperty(value) {
        this._myProperty = value;
    }
}
const myInstance = new MyClass();
console.log("instance", myInstance.myProperty); // Accessing via getter
myInstance.myProperty = 96; // Updating via setter
console.log("instance", myInstance.myProperty);
// ----ARRAY----
// Arrays are used to store multiple values of the same type.
const nums = [1, 4, 2];
// ----FUNCTION----
// Functions are reusable blocks of code. This function returns a number.
function helloBro() {
    return 5 * 9;
}
console.log(helloBro());
// -----UNION TYPES------
// Union types allow a variable to hold values of multiple types.
const data = {}; // Can be an object or a function
// -----ENUMS-----
// Enums are used to define a set of named constants.
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions[WeatherConditions["Sunny"] = 0] = "Sunny";
    WeatherConditions[WeatherConditions["Rainy"] = 1] = "Rainy";
    WeatherConditions[WeatherConditions["Cloudy"] = 2] = "Cloudy";
})(WeatherConditions || (WeatherConditions = {}));
console.log(WeatherConditions.Rainy); // Outputs: 1
const examplePerson = {
    fName: "Sam",
    lName: "Altman",
    position: "CEO",
};
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
console.log(add(4, 6)); // Outputs: 10
console.log(subtract(4, 6)); // Outputs: -2
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
// ------GENERICS------
// Generics allow creating reusable components that work with multiple types.
// Regular functions for specific types
function printNum(firstVal, secVal) {
    return [firstVal, secVal];
}
function printStr(x, y) {
    return [x, y];
}
function printBoolean(a, b) {
    return [a, b];
}
const num = printNum(36, 45);
const str = printStr("Hello", "World");
const bool = printBoolean(true, false);
console.log(num); // Outputs: [36, 45]
console.log(str); // Outputs: ["Hello", "World"]
console.log(bool); // Outputs: [true, false]
// Generic function to handle multiple data types
function printUniqueDataType(x, y) {
    return [x, y];
}
const number = printUniqueDataType(69, 45);
const string = printUniqueDataType("Hello", "World");
const boolean = printUniqueDataType(true, true);
console.log(number); // Outputs: [69, 45]
console.log(string); // Outputs: ["Hello", "World"]
console.log(boolean); // Outputs: [true, true]
const dog = printUniqueDataType({ name: "Tom", breed: "Cat" }, { name: "Thomas", breed: "Kitten" });
console.log(dog);
// multiple generics params
function reversedPair(val1, val2) {
    return [val2, val1];
}
const result = reversedPair("Hello", 69);
console.log(result);
