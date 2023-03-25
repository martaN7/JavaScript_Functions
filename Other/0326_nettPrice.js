function nettPrice(grossPrice, tax) {
    return grossPrice - grossPrice * tax / 100;
}
console.log(nettPrice(25, 19));
