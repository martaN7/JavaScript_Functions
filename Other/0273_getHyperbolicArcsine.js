function getHyperbolicArcsine(x) {
    if (isNaN(x)) return 'Wrong value!';
    return Math.asinh(x);
}

console.log(getHyperbolicArcsine(-1))
