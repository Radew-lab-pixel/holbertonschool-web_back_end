Week 23 : ES6 Classes 

Task 0 : Implement a class named ClassRoom:

Prototype: export default class ClassRoom
It should accept one attribute named maxStudentsSize (Number) and assigned to _maxStudentsSize
0-main.js

import ClassRoom from "./0-classroom.js";

const room = new ClassRoom(10);
console.log(room._maxStudentsSize)

0-classroom.js
export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}

Task 1 : Import the ClassRoom class from 0-classroom.js.

Implement a function named initializeRooms. It should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order).

1-main.js
import initializeRooms from './1-make_classrooms.js';

console.log(initializeRooms());

1-make_classrooms.js
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  return [
    // ClassRoom.create(19)
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}

/* output if array of object, Node.js/JS will return will contain object
structure not just the return value of methods. if just value not structure,
const sizes = rooms.map(room => room.getMaxStudentsSize());

return [
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
  */

Task 2 : Implement a class named HolbertonCourse:

Constructor attributes:
name (String)
length (Number)
students (array of Strings)
Make sure to verify the type of attributes during object creation
2-main.js
import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}
2-hbtn_course.js
export default class HolbertonCourse {
  constructor(name, length, students) {
    // Type checks for constructor arguments
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    // if (!Array.isArray(students) && !students.map(student=>typeof student === 'string')){
    // every() is better than map() as it stop check after first failure while map()
    // still process the rest
    // every() return true only if all elements satisfied the citeria while map() doesn't as
    // return an array
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters
  set name(value) {
    // Type checks for constructor arguments
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  set students(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._students = value;
  }
}

Task 3 : Implement a class named Currency:

- Constructor attributes:
code (String)
name (String)

3-main.js
import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());

3-currency.js
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setter
  set code(value) {
    this._code = value;
  }

  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    // return Currency;
    return `${this._name} (${this._code})`;
  }
}

Task 4 : Import the class Currency from 3-currency.js
Implement a class named Pricing:
Constructor attributes:
amount (Number)
currency (Currency)

4-main.jsimport Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());

4-pricing.js
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setter
  set amount(value) {
    // if (typeof value !== 'number')
    if (!(value instanceof Number)) {
      throw new TypeError('amount must be number');
    }
    this._amount = value;
  }

  set currency(value) {
    // if (typeof value !== Currency)  won't work with custom datatype like class
    if (!(value instanceof Currency)) {
      throw new TypeError('currency is not Currency class. Missing code and name');
    }
    this._currency = value;
  }

  // method
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // static method
  static convertPrice(amount, conversionRate) {
    if ((typeof amount !== 'number') && (typeof conversionRate !== 'number')) {
      throw new TypeError(`${amount} or ${conversionRate} is not a Number`);
    }
    const convertedPrice = amount * conversionRate;
    return convertedPrice;
  }
}

Task 5 : Implement a class named Building:
Constructor attributes:
sqft (Number)

5-main.js
import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
  new TestBuilding(200);
} catch (err) {
  console.log(err);
}

5-building.js
export default class Building {
  constructor(sqft) {
    // if (new.target !== Building && this.evacuationWarningMessage === undefined) 
    if (new.target !== Building && !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  // Getter
  get sqft() {
    return this._sqft;
  }

  // Setter
   set sqft(value) {
    if (!(value instanceof Number)) {
      throw new TypeError('sqft has to be a number');
    }
    this._sqft = value;
  }
  
  // remove the method despite required by question as it make no sense and failed checker
  // question want  method but eslint want static method
  // static evacuationWarningMessage() {
  // ??? i don't understand the question but just create another method
  //  throw new Error('Class extending Building must override evacuationWarningMessage');
  // }
  
}

Task 6 : Import Building from 5-building.js.
Implement a class named SkyHighBuilding that extends from Building:

6-main.js
import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());

6-sky_high.js
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // calls parent constructor
    this._floors = floors;
  }

  // Getter
  get sqft() {
    // return (super.sqft);
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  // method
  evacuationWarningMessage() {
    // return 'Evacuate slowly the NUMBER_OF_FLOORS floors.';
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

Task 7 : Implement a class named Airport:
Constructor attributes:
name (String)
code (String)
7-main.js
import Airport from "./7-airport.js";

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF);
console.log(airportSF.toString());

7-airport.js
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // Setter
  set name(value) {
    this._name = value;
  }

  set code(value) {
    this._code = value;
  }

  // method
  toString() {
    return `[object ${this._code}]`;
  }

  // Custom string representation for console.log
  [Symbol.for('nodejs.util.inspect.custom')]() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }
}

Task 8 : Implement a class named HolbertonClass:
Constructor attributes:
size (Number)
location (String)
8-main.js
import HolbertonClass from "./8-hbtn_class.js";

const hc = new HolbertonClass(12, "Mezzanine")
console.log(Number(hc));
console.log(String(hc));

8-htbn_class.js
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // modern approach but as to be ES6 or above
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this._size;
    if (hint === 'string') return this._location;
    return this._location; // default case (usually 'default' hint)
  }

  /* older approach
   // Cast to Number - returns size
  valueOf() {
    return this._size;
  }

  // Cast to String - returns location
  toString() {
    return this._location;
  }
  */
}

Task 9 : Fix the code
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }

  get fullStudentDescription() {
    return `${self._firstName} ${self._lastName} - ${self._holbertonClass.year} - ${self._holbertonClass.location}`;
  }
}


export const listOfStudents = [student1, student2, student3, student4, student5];

9-hoisting.js

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

const listOfStudents = [student1, student2, student3, student4, student5];
export default listOfStudents;

Task 10 : Implement a class named Car:
Constructor attributes:
brand (String)
motor (String)
color (String)

10-main.js
import Car from "./10-car.js";

class TestCar extends Car {}

const tc1 = new TestCar("Nissan", "Turbo", "Pink");
const tc2 = tc1.cloneCar();

console.log(tc1);
console.log(tc1 instanceof TestCar);

console.log(tc2);
console.log(tc2 instanceof TestCar);

console.log(tc1 == tc2);

10-car.js
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getter
  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  // Setter
  set brand(value) {
    this._brand = value;
  }

  set motor(value) {
    this._motor = value;
  }

  set color(value) {
    this._color = value;
  }

  // Using Symbol to create a unique method identifier
  [Symbol.for('cloneCar')]() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  // Public method that uses the Symbol-based implementation
  cloneCar() {
    return this[Symbol.for('cloneCar')]();
  }
/* simplest method but task need Symbol
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
*/
}
