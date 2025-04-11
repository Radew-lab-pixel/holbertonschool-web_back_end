export default function createInt8TypedArray(length, position, value) {
  // create raw binary storage
  const buffer = new ArrayBuffer(length);

  // interface for ArrayBuffer
  const dataview = new DataView(buffer);

  // set Int8 value
  dataview.setInt8(position, value);

  // return dataview;
  return buffer;
}
