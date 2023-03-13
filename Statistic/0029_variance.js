function variance(arr) {
    const n = arr.length;
    const av = arr.reduce((prev, next) => prev + next) / n;
    const arr2 = arr.map((num) => {
        return Math.pow(num - av, 2);
    });

    return arr2.reduce((prev, next) => prev + next) / n;
}