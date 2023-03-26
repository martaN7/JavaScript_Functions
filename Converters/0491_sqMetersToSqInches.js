function sqMetersToSqInches(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} m2 is ${value * 1550.0031} in2`;
}
console.log(sqMetersToSqInches(5));
