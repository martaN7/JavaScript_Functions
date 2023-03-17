function descendingDigits(number) {
    return Number(Array.from(String(number))
        .map(num => Number(num))
        .sort((a, b) => b - a)
        .join(''));
}