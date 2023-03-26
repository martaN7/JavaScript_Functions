function metersToCentimeters(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} m is ${(value * 100)} cm`;
}
console.log(metersToCentimeters(5));
