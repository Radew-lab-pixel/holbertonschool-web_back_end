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
