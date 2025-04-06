export default class Building {
  constructor(sqft) {
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
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

  // method
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
