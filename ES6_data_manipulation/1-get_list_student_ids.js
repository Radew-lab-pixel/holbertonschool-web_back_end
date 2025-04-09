export default function getListStudentIds(values) {
  if (!(values instanceof Array)) {
    // const list_value = [];
    return [];
  }
  const listValue = values.map((value) => `${value.id}`);

  return listValue;
}
