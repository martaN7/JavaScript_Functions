function standardDeviation(arr) {
    const n = arr.length;
    const av = arr.reduce((prev, next) => prev + next) / n;
    const variance = arr.map((num) => Math.pow(num - av, 2)).reduce((prev, next) => prev + next) / n;
    return Math.sqrt(variance);
}