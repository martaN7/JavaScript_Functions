function countOddNumbers(numbers) {
    return numbers.filter((num) => num % 2 !== 0).length;
}

console.log(countOddNumbers([1,5,9,7,3,5,4]));