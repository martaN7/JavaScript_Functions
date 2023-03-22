function squareDividers(number) {
    if (number <= 0) {
        return 'The number must be greater than 0';
    }
    const values = [];
    for (let i = 1; i <= number; i++) {
        values.push(i);
    }
    return values.filter((value) => number % value === 0).map((value) => value * value);
}