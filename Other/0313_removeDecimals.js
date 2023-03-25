function removeDecimals(num) {
    if (isNaN(num)) return 'Wrong value!';
    return Math.trunc(num);
}
console.log(removeDecimals(3.364))
