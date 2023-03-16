function sumDigits(number) {
    return Array.from(String(number))
        .map(num => Number(num))
        .reduce((p, n) => p + n);
}