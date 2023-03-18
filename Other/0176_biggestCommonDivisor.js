function biggestCommonDivisor(a, b) {
    if (b === 0) {
        return a;
    } else {
        return biggestCommonDivisor(b, a % b);
    }
}

console.log(biggestCommonDivisor(12,6));