function getHyperbolicTangent(x) {
    if (isNaN(x)) return 'Wrong value!';
    return Math.tanh(x);
}
console.log(getHyperbolicTangent(-1))
