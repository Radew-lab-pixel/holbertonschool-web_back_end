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
