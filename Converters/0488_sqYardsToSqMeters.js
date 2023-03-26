function sqYardsToSqMeters(value) {
    if (!Number(value)) {
        return 'Invalid value!';
    }
    return `${value} yd2 is ${value * 0.8361} m2`;
}
console.log(sqYardsToSqMeters(5));
