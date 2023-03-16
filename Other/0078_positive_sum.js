function positiveSum(arr) {
    const arr2 = arr.filter(n => n > 0)
    return arr2.length > 0 ? arr2.reduce((p, n) => p + n) : 0;
}