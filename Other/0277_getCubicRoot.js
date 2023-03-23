function getCubicRoot(x) {
    if (isNaN(x)) return 'Wrong value!';
    return Math.cbrt(x);
}
console.log(getCubicRoot(8))
