function miligramsToOunces(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} mg is ${(value * 0.000035)} oz`;
}
console.log(miligramsToOunces(5));
