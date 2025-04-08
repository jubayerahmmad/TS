// -----CLASS-------
// A class is a blueprint for creating objects. It can have properties and methods.
// Access modifiers (public, private, protected) control the visibility of class members.
class Player {
  public name: string; // Public: Accessible from anywhere
  public age: number; // Public: Accessible from anywhere
  private country: string; // Private: Accessible only within the class

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  // A method to display player details
  play() {
    console.log(
      `${this.name} is ${this.age} years old and from ${this.country}`
    );
  }
}

// Creating instances of the Player class
const lamineYamal = new Player("Lamine", 17, "Spain");
const pedri = new Player("Pedri", 22, "Spain");

// Storing players in an array
const players: Player[] = [];
players.push(lamineYamal);
players.push(pedri);
console.log(players);

// -----GETTERS AND SETTERS-----
// Getters and setters allow controlled access to private properties.
class MyClass {
  private _myProperty: number = 0; // Private property

  // Getter to retrieve the value of _myProperty
  get myProperty(): number {
    return this._myProperty;
  }

  // Setter to update the value of _myProperty
  set myProperty(value: number) {
    this._myProperty = value;
  }
}

const myInstance = new MyClass();
console.log("instance", myInstance.myProperty); // Accessing via getter
myInstance.myProperty = 96; // Updating via setter
console.log("instance", myInstance.myProperty);

// ----ARRAY----
// Arrays are used to store multiple values of the same type.
const nums: number[] = [1, 4, 2];

// ----FUNCTION----
// Functions are reusable blocks of code. This function returns a number.
function helloBro(): number {
  return 5 * 9;
}
console.log(helloBro());

// -----UNION TYPES------
// Union types allow a variable to hold values of multiple types.
const data: object | Function = {}; // Can be an object or a function

// ------INTERSECTION TYPES-----
// Intersection types combine multiple types into one.
type Person = {
  name: string;
  age: number;
};

type Employee = {
  designation: string;
  salary: number;
};

type personAndEmployee = Person & Employee; // Combines Person and Employee types

// -----ENUMS-----
// Enums are used to define a set of named constants.
enum WeatherConditions {
  Sunny,
  Rainy,
  Cloudy,
}
console.log(WeatherConditions.Rainy); // Outputs: 1

// -------INTERFACE--------
// Interfaces define the structure of an object or a contract for classes.
interface FamousPerson {
  fName: string;
  lName: string;
  position: string;
}

const examplePerson: FamousPerson = {
  fName: "Sam",
  lName: "Altman",
  position: "CEO",
};

// Interfaces can also define function types.
interface MathOperation {
  (x: number, y: number): number;
}
const add: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;

console.log(add(4, 6)); // Outputs: 10
console.log(subtract(4, 6)); // Outputs: -2

// Interfaces can be implemented by classes.
interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  start(): void {
    console.log("Car is Starting....");
  }
  stop(): void {
    console.log("Car is Stopping...");
  }
}
const myCar = new Car();
myCar.start();
myCar.stop();

// ------GENERICS------
// Generics allow creating reusable components that work with multiple types.

// Regular functions for specific types
function printNum(firstVal: number, secVal: number): [number, number] {
  return [firstVal, secVal];
}
function printStr(x: string, y: string): [string, string] {
  return [x, y];
}
function printBoolean(a: boolean, b: boolean): [boolean, boolean] {
  return [a, b];
}
const num = printNum(36, 45);
const str = printStr("Hello", "World");
const bool = printBoolean(true, false);

console.log(num); // Outputs: [36, 45]
console.log(str); // Outputs: ["Hello", "World"]
console.log(bool); // Outputs: [true, false]

// Generic function to handle multiple data types
function printUniqueDataType<Type>(x: Type, y: Type): [Type, Type] {
  return [x, y];
}

const number = printUniqueDataType<number>(69, 45);
const string = printUniqueDataType<string>("Hello", "World");
const boolean = printUniqueDataType<boolean>(true, true);
console.log(number); // Outputs: [69, 45]
console.log(string); // Outputs: ["Hello", "World"]
console.log(boolean); // Outputs: [true, true]

interface Dog {
  name: string;
  breed: string;
}

const dog = printUniqueDataType<Dog>(
  { name: "Tom", breed: "Cat" },
  { name: "Thomas", breed: "Kitten" }
);
console.log(dog);

// multiple generics params
function reversedPair<T, U>(val1: T, val2: U): [U, T] {
  return [val2, val1];
}
const result = reversedPair("Hello", 69);
console.log(result);
