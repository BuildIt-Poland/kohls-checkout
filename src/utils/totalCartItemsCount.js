// Sum up quantity of all items in cart

function totalCartItemsCount(items) {
  return items.reduce((totalCount, item) => {
    return totalCount + item.quantity;
  }, 0);
}

export default totalCartItemsCount;
