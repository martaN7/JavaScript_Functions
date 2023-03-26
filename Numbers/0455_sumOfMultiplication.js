function sumOfMultiplication(n) {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += n * i;
    }
    return sum;
}
console.log(sumOfMultiplication(21));
