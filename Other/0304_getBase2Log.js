function getBase2Log(x) {
    if (isNaN(x) || x < -1) return 'Wrong value!';
    return Math.log2(x);
}
console.log(getBase2Log(5))
