export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!(students instanceof Array)) {
    throw new TypeError('students not Array');
  }
  if (typeof city !== 'string') {
    throw new TypeError('city not string');
  }
  if (!(newGrades instanceof Array)) {
    throw new TypeError('new Grade not Array');
  }

  // students.map()
  // Filter students by city and map to include grades
  // const filterStudents = students.filter(student=>student.city)
  return students
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade: (newGrades.find((g) => g.studentId === student.id)), // ?.grade || 'N/A')
    }));
}
