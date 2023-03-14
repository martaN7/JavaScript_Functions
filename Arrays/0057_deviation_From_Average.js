function deviationFromAverage(numbers) {
    const av = numbers.reduce((p, n) => p + n) / numbers.length;
    return numbers.map(number => Math.abs(av - number));
}