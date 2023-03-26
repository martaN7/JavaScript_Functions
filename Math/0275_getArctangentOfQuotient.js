function getArctangentOfQuotient(y, x) {
    if (isNaN(x)) return 'Wrong value!';
    return Math.atan2(y, x);
}

console.log(getArctangentOfQuotient(-1,3))
