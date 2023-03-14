function addDuplicatesOfNumbers(n, numbers) {
    if (!numbers.includes(n)) return null;
    return numbers.filter(number => number === n).reduce((p, n) => p + n);
}