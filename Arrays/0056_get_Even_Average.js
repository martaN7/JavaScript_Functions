function getEvenAverage(numbers) {
    const filteredNumbers = numbers.filter(number => number % 2 === 0)
    return filteredNumbers.reduce((prev, next) => prev + next) / filteredNumbers.length;
}