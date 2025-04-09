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
