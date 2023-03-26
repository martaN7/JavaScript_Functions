function sqFeetToSqMeters(value) {
    if (!Number(value)) {
        return 'Invalid value!';
    }
    return `${value} ft2 is ${value * 0.0929} m2`;
}
console.log(sqFeetToSqMeters(5));
