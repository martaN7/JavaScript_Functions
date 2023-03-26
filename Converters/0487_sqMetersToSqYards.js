function sqMetersToSqYards(value) {
    if (!Number(value)) {
        return 'Invalid value!';
    }
    return `${value} m2 is ${value * 1.19599} yd2`;
}
console.log(sqMetersToSqYards(5));
