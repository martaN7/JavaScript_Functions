function sortDigits(number) {
    return Array.from(String(number))
        .map(num => Number(num))
        .sort((a, b) => a - b)
        .join('');
}