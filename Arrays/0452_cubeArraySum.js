function cubeArraySum(numbers) {
    return numbers.map(num => num * num * num).reduce((p, n) => p + n);
}
console.log(cubeArraySum([1,2,3,4,6]));
