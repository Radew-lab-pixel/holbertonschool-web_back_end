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
