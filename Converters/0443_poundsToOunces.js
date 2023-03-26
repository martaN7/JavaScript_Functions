function poundsToOunces(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} lb is ${(value * 16)} oz`;
}
console.log(poundsToOunces(5));
