function getHyperbolicSine(x) {
    if (isNaN(x)) return 'Wrong value!';
    return Math.sinh(x);
}
console.log(getHyperbolicSine(-1))
