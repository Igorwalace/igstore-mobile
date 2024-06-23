export const Discount = (valuePrice: number, valueDiscount: number) => {

    const discountTotal = Number((valuePrice * valueDiscount) / 100)
    const priceTotal = Number(valuePrice - discountTotal)

    return priceTotal.toFixed(2)
}