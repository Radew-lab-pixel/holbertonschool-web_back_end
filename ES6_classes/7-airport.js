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

  //method
  toString(){
    return `[object] ${this._code}`;
  }
}
