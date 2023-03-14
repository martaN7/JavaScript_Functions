function findMissingNumber(numbers) {
    let missingNumber;
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] + 1 !== numbers[i + 1]) {
            missingNumber = (numbers[i] + 1);
        }
    }
    return missingNumber;
}

console.log(findMissingNumber([6,7,8,10,11,12,13,14,15]));