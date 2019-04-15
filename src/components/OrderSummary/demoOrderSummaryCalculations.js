// TODO calculations and constants just for PoC purposes @blurbyte
// In real app those calculations should be performed on server

export const SHIPPING_COST = 0;
export const SUPER_DISCOUNT_PERCENTAGE = 15;
export const TAX_PERCANTAGE = 8;

export function subtotalPrice(items) {
  return items.reduce((allItemsPrice, item) => {
    const itemPrice = item.price.discount || item.price.regular; // takes discount price if it exists
    return allItemsPrice + itemPrice * item.quantity;
  }, 0);
}

export function totalPrice(shipping, discount, tax, subtotal) {
  return subtotal + subtotal * (tax / 100) - subtotal * (discount / 100) + shipping;
}

export function superDiscountAmount(discountPercentage, subtotal) {
  return subtotal * (discountPercentage / 100);
}

export function taxAmount(taxPercentage, subtotal) {
  return subtotal * (taxPercentage / 100);
}
