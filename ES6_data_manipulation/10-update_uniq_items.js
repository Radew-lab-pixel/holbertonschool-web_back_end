export default function updateUniqueItems(map) {
  // for map in maps
  // for (const [key, value] in maps) {
/* for (const [key, value] of maps()) {
  if (value === 1) {
      // value = 100;
      maps.set(key, 100);
    }
  } */

  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}
