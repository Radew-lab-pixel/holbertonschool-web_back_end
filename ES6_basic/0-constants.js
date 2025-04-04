/* export function taskFirst() {
    var task = 'I prefer const when I can.';
    return task;
  } */

export function taskFirst() {
  // avoid using var , use const if variable is fixed
  // var task = 'I prefer const when I can.';
  const taskFirst = "i prefer const when I can"; 
  return taskFirst;
}

export function getLast() {
    return ' is okay';
  }

  
export function taskNext() {
    // avoid using var , use let if variable required changes
    // var  combination = 'But sometimes let';
    let combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }