function product(a, b) {
    let arr = [];
    for (let i = a + 1; i < b; i++) {
        arr.push(i);
    }
    if (!arr.length) return 'Error';
    return arr.reduce((a, b) => a * b)
}
console.log(product(3,5));
