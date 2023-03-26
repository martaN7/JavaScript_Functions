function sqInchesToSqCentimeters(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} in2 is ${value * 6.4516} cm2`;
}
console.log(sqInchesToSqCentimeters(5));
