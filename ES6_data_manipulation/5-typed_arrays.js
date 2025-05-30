export default function createInt8TypedArray(length, position, value) {
  if ((position > length) || (position < 0)) {
    throw new Error('Position outside range');
  }
  // create raw binary storage
  const buffer = new ArrayBuffer(length);

  // interface for ArrayBuffer
  const dataview = new DataView(buffer);

  // set Int8 value
  dataview.setInt8(position, value);

  // bytelength = dataview.byteLength;
  // byteoffset = dataview.byteOffset;
  return dataview;
  // return (`DataView {buffer: ${buffer} }`);
}
