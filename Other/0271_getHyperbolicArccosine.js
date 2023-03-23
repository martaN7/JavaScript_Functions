function getHyperbolicArccosine(x) {
    if (isNaN(x) || (1 > x)) return 'Wrong value!';
    return Math.acosh(x);
}
console.log(getHyperbolicArccosine(5))
