function roundUpNumber(x) {
    if (isNaN(x)) return 'Wrong value!';
    return Math.ceil(x);
}
console.log(roundUpNumber(8.32))
