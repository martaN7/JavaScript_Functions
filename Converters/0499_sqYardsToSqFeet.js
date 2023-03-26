function sqYardsToSqFeet(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} yd2 is ${value * 9} ft2`;
}
console.log(sqYardsToSqFeet(5));
