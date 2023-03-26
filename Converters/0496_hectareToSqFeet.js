function hectareToSqFeet(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} ha is ${value * 107639.10} ft2`;
}
console.log(hectareToSqFeet(5));
