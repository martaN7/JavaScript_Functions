function squareDigits(num) {
    return Number(Array.from(String(num)).map(num => num * num).join(''));
}