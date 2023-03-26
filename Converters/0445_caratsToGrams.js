function caratsToGrams(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} ct is ${(value * 0.2)} g`;
}
console.log(caratsToGrams(5));
