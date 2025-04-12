##Week 23 - ES6 Data manipulation 
Task 0 : Create a function named getListStudents that returns an array of objects.
Each object should have three attributes: id (Number), firstName (String), and location (String).

0-main.py
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());

0-get_list_students.js
export default function getListStudents() {
  // const [id, firstName, location];
  // Array.con
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }
  ];
}

Task 1 : Create a function getListStudentIds that returns an array of ids from a list of object.

1-main.js
import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));

1-get_list_student_ids.js
export default function getListStudentIds(values) {
  if (!(values instanceof Array)) {
    // const list_value = [];
    return [];
  }
  // const listValue = values.map((value) => `${value.id}`);
  const listValue = values.map((value) => value.id);
  return listValue;
}

Task 2 : 
2-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentsByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));

2-get_students_by_loc.js
export default function getStudentsByLocation(students, city) {
  // if ((!(students instanceof Array)) || (!(city instanceof String))) {
  if (!(students instanceof Array)) {
    throw new TypeError('students not Array');
  }
  // if (!(city instanceof String))  // only check for string object not string primitive in JS 
  if (typeof city !== 'string') {
    throw new TypeError('city not String');
  }
  const filterValue = students.filter((student) => student.location === city);
  return filterValue;
}

Task 3 : Create a function getStudentIdsSum that returns the sum of all the student ids.
3-main.js
import getListStudents from "./0-get_list_students.js";
import getStudentIdsSum from "./3-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);

3-get_ids_sum.js
export default function getStudentIdsSum(students) {
  // if (typeof students != 'array'){
  if (!(students instanceof Array)) {
    throw new TypeError('students not Array');
  }
  // const sum = students.reduce(acc, cur)=>acc
  const total = students.reduce((sum, student) => sum + student.id, 0);
  // single value of sum consists of each element student
  // start with 0 then add student.id to sum
  return total;
}

Task 4 : Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade

4-main.js
import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));

4-update_grade_by_city.js
export default function updateStudentGradeByCity(students, city, newGrades){
    if (!(students instanceof Array)){
        throw new TypeError ("students not Array");
    }
    if (typeof city !== 'string'){
        throw new TypeError ("city not string");
    }
    if (!(newGrades instanceof Array)){
        throw new TypeError("new Grade not Array");
    }

    //students.map()
    // Filter students by city and map to include grades
    //const filterStudents = students.filter(student=>student.city)
    return students
    .filter(student => student.location === city)
    .map(student => ({
      ...student,
      grade: newGrades.find(g => g.studentId === student.id)?.grade || 'N/A'
    }));
    
}

Task 5 : Create a function named createInt8TypedArray that returns a new ArrayBuffer with an Int8 value at a specific position.

5-main.js
import createInt8TypedArray from "./5-typed_arrays.js";

console.log(createInt8TypedArray(10, 2, 89));

5-typed_arrays.js

export default function createInt8TypedArray(length, position, value) {
  if ((position > length) || (position < 0)) {
    throw new Error('Position outside range');
  }
  // create raw binary storage
  const buffer = new ArrayBuffer(length);

  // interface for ArrayBuffer
  const dataview = new DataView(buffer);

  // set Int8 value
  dataview.setInt8(position, value);

  // bytelength = dataview.byteLength;
  // byteoffset = dataview.byteOffset;
  return dataview;
  // return (`DataView {buffer: ${buffer} }`);
}

Task 6 : Create a function named setFromArray that returns a Set from an array.

6-main.js

import setFromArray from "./6-set.js";

console.log(setFromArray([12, 32, 15, 78, 98, 15]));

6-set.js
export default function setFromArray(array) {
  return new Set(array);
}

Task 7: Create a function named hasValuesFromArray that returns a boolean if all the elements in the array exist within the set.

7-main.js
import hasValuesFromArray from "./7-has_array_values.js";

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));

7-has_array_values.js

export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}

Task 8 : Create a function named cleanSet that returns a string of all the set values that start with a specific string (startString).

8-main.js
import cleanSet from "./8-clean_set.js";

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));

8-clean_set.js

export default function cleanSet(set, startString) {
  const filteredValues = [];
  // if (!(startString instanceof String))
  /**
  if (typeof startString !== 'string') {
    return filteredValues;
    // return '';
  }
* */

  // Iterate through each value in the set
  for (const value of set) {
    // Check if value is a string and starts with startString
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Append the rest of the string (after startString)
      filteredValues.push(value.slice(startString.length));
    }
  }

  // Join the filtered values with '-'
  return filteredValues.join('-');
}

Task 9 : Create a function named groceriesList that returns a map of groceries with the following items (name, quantity):

9-main.js
import groceriesList from "./9-groceries_list.js";

console.log(groceriesList());

9-groceries_list.js

export default function groceriesList() {
  const groceryMap = new Map();
  groceryMap.set('Apples', 10);
  groceryMap.set('Tomatoes', 10);
  groceryMap.set('Pasta', 1);
  groceryMap.set('Rice', 1);
  groceryMap.set('Banana', 5);

  return groceryMap;
}

Task 10 : Create a function named updateUniqueItems that returns an updated map for all items with initial quantity at 1.

10-main.js

import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);

10-update_uniq_items.js

export default function updateUniqueItems(map) {
  // for map in maps
  // for (const [key, value] in maps) {
/* for (const [key, value] of maps()) {
  if (value === 1) {
      // value = 100;
      maps.set(key, 100);
    }
  } */
  if (!(map instanceof Map)) {
    throw new TypeError('Cannot process');
  }

  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}