function twoMakesTen(num1, num2) {
    return [num1, num2, num1 + num2].includes(10);
}
console.log(twoMakesTen(6,4));