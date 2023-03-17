function sortNumber(number) {
    return Number(Array.from(String(number))
        .map(num => Number(num))
        .filter(num => num !== 0)
        .sort((a, b) => a - b)
        .join(''));
}