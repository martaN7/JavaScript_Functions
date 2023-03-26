function kilometersToCentimeters(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} km is ${(value * 100000)} cm`;
}
console.log(kilometersToCentimeters(5));
