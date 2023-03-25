function getEulersPower(x) {
    if (isNaN(x)) return 'Wrong value!';
    return Math.exp(x);
}
console.log(getEulersPower(5))
