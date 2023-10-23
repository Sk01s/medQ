const calculatePersentage = (actualPrice, offerPrice) => {
    const price = parseFloat(actualPrice)
    const priceOff = parseFloat(offerPrice) / 100

    const totalCost = price - (price * priceOff)

    return totalCost.toFixed(2)
}

export default calculatePersentage;