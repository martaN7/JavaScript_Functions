function getNatLog(x) {
    if (isNaN(x)) return 'Wrong value!';
    return Math.log(x);
}

console.log(getNatLog(5))
