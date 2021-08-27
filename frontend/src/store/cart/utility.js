export const calcTotalPrice = (array) => {
    let total = 0;
    array.map(x => {
        total += x.price * x.quantity;
    });
    return total
};

export const addToLocalStorage = (state) => {
    localStorage.setItem('cart', JSON.stringify(state));
};