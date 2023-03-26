function ouncesToPounds(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} oz is ${(value * 0.0625)} lb`;
}
console.log(ouncesToPounds(5));
