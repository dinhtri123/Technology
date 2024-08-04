export const formatPrice = (price) => {
    const priceHasFormat = `${price.toLocaleString("vi-VN", {
      decimal: ".",
    })}`;
    return priceHasFormat;
}
