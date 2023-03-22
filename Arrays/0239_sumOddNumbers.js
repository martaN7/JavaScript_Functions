function sumOddNumbers(arr) {
    return arr.reduce((p, n) => n % 2 !== 0 ? p + n : p + 0, 0)
}
console.log(sumOddNumbers([1,2,3,4,5]))
