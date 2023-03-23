function getArcsine(x) {
    if (isNaN(x) || (-1 > x) || (x > 1)) return 'Wrong value!';
    return Math.asin(x);
}

console.log(getArcsine(-1))
