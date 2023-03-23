function getHyperbolicArctangent(x) {
    if (isNaN(x) || (-1 > x) || (x > 1)) return 'Wrong value!';
    return Math.atanh(x);
}
console.log(getHyperbolicArctangent(-1))
