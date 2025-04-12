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


