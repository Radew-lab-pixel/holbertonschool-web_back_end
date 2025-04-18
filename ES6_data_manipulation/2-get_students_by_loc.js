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
