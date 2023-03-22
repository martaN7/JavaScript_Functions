function isPerfectSquare(num) {
    const sqrt = Math.sqrt(num);
    return Math.floor(sqrt) ** 2 === num;
}
console.log(isPerfectSquare(25));