const totalC = (products) => {
    const total = products.reduce((acc, el) => {
        acc += parseFloat(el.price) * el.quantity;
        return acc;
    }, 0);

    const cartTotal = ((total * 100) / 100).toFixed(2);
    return cartTotal
}

export default totalC;