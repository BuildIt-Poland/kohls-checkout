// Adds currency sign before price
// Adds trailing zeroes in case of round prices

function formattedPrice(price) {
  return `$${(price / 100).toFixed(2)}`;
}

export default formattedPrice;
