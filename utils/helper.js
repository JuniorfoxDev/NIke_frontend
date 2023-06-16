export const getDiscountedPrice = (
    orignalPrice,
    discountedPrice
) => {
    const discount = orignalPrice - discountedPrice;
    const discountPrice = (discount / orignalPrice) * 100;
    return discountPrice.toFixed(0);
}