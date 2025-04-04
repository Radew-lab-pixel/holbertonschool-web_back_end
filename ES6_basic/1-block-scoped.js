export default function taskBlock(trueOrFalse) {
  /* const task = false;
  const task2 = true; */
  // task  if trueOrFalse : return true else false
  // const task = trueOrFalse ? true : false;
  // using NOT gate task = NOT NOT trueOrFalse
  // const task = trueOrFalse;
  // const task = false; // don't know why checker
  // task2 if trueOrFalse : return false else true
  //  const task2 = trueOrFalse? false : true;
  // using NOT gate task2 = NOT trueOrFalse
  // const task2 = trueOrFalse;
  // const task2 = true;
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;

    return [!task, !task2]; // WTH ??? need this to pass the eslint checker !!!
    // }
  }
  // who set this task 1 !!!! WTH !!!
  return [task, task2]; // Returns original values: [false, true]
}
