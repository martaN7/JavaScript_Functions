function squareSum(numbers) {
    return numbers.reduce((p, n) => p + n ** 2, 0);
}

console.log(squareSum([0,3,4,5]))
