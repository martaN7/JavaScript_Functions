function getSquareDiagonal(a) {
    if (isNaN(a) || a <= 0) return 'Wrong value!';
    return Math.SQRT2 * a;
}
console.log(getSquareDiagonal(5))
