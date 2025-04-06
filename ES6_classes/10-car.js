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
