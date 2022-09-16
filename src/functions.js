export function counter(array) {
  if (!array) {
    return;
  }
  return array.reduce((acc, elem) => acc + elem.count, 0);
}
