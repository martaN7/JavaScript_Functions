function negativeSum(arr) {
    return arr.reduce((p, n) => p + (n < 0 ? n : 0), 0)
}

console.log(negativeSum([3,-5,1]));