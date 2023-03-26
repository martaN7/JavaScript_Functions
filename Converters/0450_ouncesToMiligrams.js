function ouncesToMiligrams(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} oz is ${(value * 28349.523)} mg`;
}
console.log(ouncesToMiligrams(5));
