function multiple3or5(num) {
    if (num <= 2) return 0;
    const arr = []
    for (let i = 1; i < num; i++) {
        arr.push(i);
    }
    return arr.filter((num) => {
        return num % 3 === 0 || num % 5 === 0;
    }).reduce((p, n) => p + n, 0);
}