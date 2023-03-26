function getSquareRoot(x) {
    if (isNaN(x) || x < 0) return 'Wrong value!';
    return Math.sqrt(x);
}
console.log(getSquareRoot(5))
