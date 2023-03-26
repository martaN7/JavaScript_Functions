function sqInchesToSqMeters(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} in2 is ${value * 0.000645} m2`;
}
console.log(sqInchesToSqMeters(5));
