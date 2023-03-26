function factorial(x) {
    let sum = 1;
    for (let i = x; i >= 1; i--) {
        sum *= i;
    }
    return sum;
}
console.log(factorial(5));
