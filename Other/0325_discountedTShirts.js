function discountedTShirts(amount) {
    const price = 25;
    switch (amount) {
        case 2:
            return `${price + price * 0.9} $`;
        case 3:
            return `${price * 2 + price * 0.75} $`;
        case 5:
            return `${price * amount * 0.6} $`;
        case 7:
            return `${price * amount * 0.5} $`;
        default:
            return `${price * amount} $`;
    }
}
console.log(discountedTShirts(2));
