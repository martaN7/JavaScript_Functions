function kilogramsToOunces(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} kg is ${(value * 35.274)} oz`;
}
console.log(kilogramsToOunces(5));