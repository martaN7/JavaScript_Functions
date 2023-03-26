function getHyberbolicCosine(x) {
    if (isNaN(x)) return 'Wrong value!';
    return Math.cosh(x);
}

console.log(getHyberbolicCosine(5))
