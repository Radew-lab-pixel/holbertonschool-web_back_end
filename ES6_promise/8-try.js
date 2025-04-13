export default function divideFunction(numerator, denominator) {
  // if ((!(denominator instanceof Number)) || (!(numerator instanceof Number))) {
  if ((typeof numerator !== 'number') || (typeof denominator !== 'number')) {
    throw new TypeError('numerator or denominator has to be number');
  }
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  } else {
    return (numerator / denominator);
  }
}
