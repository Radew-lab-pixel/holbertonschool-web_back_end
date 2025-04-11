export default function updateUniqueItems(maps) {
  // for map in maps
  for (const [key, value] in maps) {
    if (value === 1) {
      // value = 100;
      maps.set(key, 100);
    }
  }
}
