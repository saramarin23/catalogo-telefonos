export const filterProducts = (products) => {
  const uniqueProducts = new Set();
  return products.filter(product => {
    if (uniqueProducts.has(product.id)) {
      return false;
    } else {
      uniqueProducts.add(product.id)
      return true;
    }
  })
}