export function counter(array) {
  if (!array) {
    return;
  }

  return array.reduce((acc, elem) => acc + elem.count, 0);
}

export function addToCart(item, id) {
  if (item.id === id) {
    return {
      ...item,
      count: item.count + 1,
      total: item.total + item.price,
    };
  }
  return item;
}

export function removeFromCart(items) {
  return items.map((item) => {
    return {
      ...item,
      count: 0,
      total: 0,
    };
  });
}
