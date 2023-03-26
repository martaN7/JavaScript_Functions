function kilometersToMilimeters(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} km is ${(value * 1000000)} mm`;
}
console.log(kilometersToMilimeters(5));
