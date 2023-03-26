function sqMetersToSqFeet(value) {
    if (!Number(value)) {
        return 'Invalid value!';
    }
    return `${value} m2 is ${value * 10.7639} ft2`;
}
console.log(sqMetersToSqFeet(5));
