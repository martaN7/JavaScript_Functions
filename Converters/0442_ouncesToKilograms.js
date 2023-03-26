function ouncesToKilograms(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} oz is ${(value * 0.02835)} kg`;
}
console.log(ouncesToKilograms(5));
