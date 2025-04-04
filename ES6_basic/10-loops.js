export default function appendToEachArrayValue(array, appendString) {
  /*  ifor (const idx in array) {
    const value = iarray[idx];
    array[idx] = appendString + value;
  } */

  const newArray = [];
  for (const value of array) {
    newArray.push(appendString + value);
  }

  /*
  for (const idx of array) {
    const value = array[idx];
    array[idx] = appendString + value;
  }
    */
  return newArray;
}
