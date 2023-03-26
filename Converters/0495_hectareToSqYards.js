function hectareToSqYards(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} ha is ${value * 11959.9} yd2`;
}
console.log(hectareToSqYards(5));
