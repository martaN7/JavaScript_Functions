function roundNumber(num) {
    if (isNaN(num)) return 'Wrong value!';
    return Math.round(num);
}
console.log(roundNumber(3.364))
