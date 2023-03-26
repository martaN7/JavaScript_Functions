function getBase10Log(x) {
    if (isNaN(x) || x < 0) return 'Wrong value!';
    return Math.log10(x);
}
console.log(getBase10Log(5))
