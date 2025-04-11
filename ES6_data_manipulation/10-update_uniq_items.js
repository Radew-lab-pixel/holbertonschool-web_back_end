export default function updateUniqueItems(map) {
  // for map in maps
  // for (const [key, value] in maps) {
/* for (const [key, value] of maps()) {
  if (value === 1) {
      // value = 100;
      maps.set(key, 100);
    }
  } */
  if (!(map instanceof Map)) {
    throw new TypeError('Cannot process');
  }

  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}
