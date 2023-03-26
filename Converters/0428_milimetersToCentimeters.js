function milimetersToCentimeters(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} mm is ${(value / 10)} cm`;
}
console.log(milimetersToCentimeters(5));
