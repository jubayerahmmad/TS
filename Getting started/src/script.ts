// class
class Player {
  public name: string;
  public age: number;
  private country: string; // access modifiers

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(
      `${this.name} is ${this.age} years old and from ${this.country}`
    );
  }
}

const lamineYamal = new Player("Lamine", 17, "Spain");
const pedri = new Player("Pedri", 22, "Spain");

const players: Player[] = [];
players.push(lamineYamal);
players.push(pedri);
console.log(players);

// getters and setters
class MyClass {
  private _myProperty: number = 0;

  get myProperty(): number {
    return this._myProperty;
  }

  set myProperty(value: number) {
    this._myProperty = value;
  }
}

const myInstance = new MyClass();

console.log("instance", myInstance.myProperty);
myInstance.myProperty = 96;
console.log("instance", myInstance.myProperty);

// array
const nums: number[] = [1, 4, 2];

// function
function helloBro(): number {
  return 5 * 9;
}
console.log(helloBro());

// union
const data: object | Function = {};

// Intersection types
type Person = {
  name: string;
  age: number;
};

type Employee = {
  designation: string;
  salary: number;
};

type personAndEmployee = Person & Employee;

// enums
enum WeatherConditions {
  Sunny,
  Rainy,
  Cloudy,
}
console.log(WeatherConditions.Rainy);

// interface
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

interface MathOperation {
  (x: number, y: number): number;
}
const add: MathOperation = (x, y) => x + y;
const substract: MathOperation = (x, y) => x - y;

console.log(add(4, 6));
console.log(substract(4, 6));

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
