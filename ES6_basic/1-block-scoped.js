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

  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }
  if (trueOrFalse) {
    task = !trueOrFalse;
    task2 = trueOrFalse;
  }

  return [task, task2];
}
