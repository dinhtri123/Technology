export const PercentDiscount = (priceNew, priceOld) => {
    const total = (priceNew/priceOld) * 100;
    const result = `${Math.round(100 - total)}%`;
    return result;
}