import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // calls parent constructor
    this._floors = floors;
  }

  //Getter 
  get sqft() {
    //return (super.sqft);
    return this._sqft;
}

  get floors() {
    return this._floors;
  }

  // question wants method , eslint want static method
  static evacuationWarningMessage() {
    return 'Evacuate slowly the NUMBER_OF_FLOORS floors.';
  }
}
