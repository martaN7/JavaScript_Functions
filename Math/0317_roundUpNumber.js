function roundUpNumber(num) {
    if (isNaN(num)) return 'Wrong value!';
    return Math.ceil(num);
}
console.log(roundUpNumber(3.364))
