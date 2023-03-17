function ascendingDigits(number) {
    return Number(Array.from(String(number))
        .map(num => Number(num))
        .sort((a, b) => a - b)
        .join(''));
}

console.log(ascendingDigits(354651));