function highAndLow(numbers) {
    const sortedArr = numbers.split(' ').sort((a, b) => b - a);
    return `${sortedArr[0]} ${sortedArr[sortedArr.length - 1]}`
}