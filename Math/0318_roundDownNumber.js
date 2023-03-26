function roundDownNumber(num) {
    if (isNaN(num)) return 'Wrong value!';
    return Math.floor(num);
}
console.log(roundDownNumber(3.364))
