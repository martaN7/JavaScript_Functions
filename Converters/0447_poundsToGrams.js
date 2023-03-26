function poundsToGrams(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} lb is ${(value * 453.592)} g`;
}
console.log(poundsToGrams(5));
