export const getAbsolutePrice = (price, discount) => {
    return price - (price / 100) * discount;
};