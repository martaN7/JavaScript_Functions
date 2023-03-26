function sqCentimetersToSqInches(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} cm2 is ${value * 0.155} in2`;
}
console.log(sqCentimetersToSqInches(5));
