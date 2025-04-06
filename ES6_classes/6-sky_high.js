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
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
