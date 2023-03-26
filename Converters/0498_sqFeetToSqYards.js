function sqFeetToSqYards(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} ft2 is ${value / 9} yd2`;
}
console.log(sqFeetToSqYards(5));
