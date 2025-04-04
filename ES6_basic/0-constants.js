

export function taskFirst() {
  // use const if is fixed
  //
  const taskFirst = "i prefer const when I can"; 
  return taskFirst;
}

export function getLast() {
    return ' is okay';
  }

  
export function taskNext() {
    //  use let if required changes
    // 
    let combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }