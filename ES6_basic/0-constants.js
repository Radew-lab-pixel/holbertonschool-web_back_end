

export function taskFirst() {
  // use const if variable is fixed
  //
  const taskFirst = "i prefer const when I can"; 
  return taskFirst;
}

export function getLast() {
    return ' is okay';
  }

  
export function taskNext() {
    //  use let if variable required changes
    // 
    let combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }