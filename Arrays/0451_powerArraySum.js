function powerArraySum(numbers) {
    return numbers.map(num => num ** 2).reduce((p, n) => p + n);
}
console.log(powerArraySum([1,2,3,4,6]));
