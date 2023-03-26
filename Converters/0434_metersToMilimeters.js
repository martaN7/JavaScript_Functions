function metersToMilimeters(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} m is ${(value * 1000)} mm`;
}
console.log(metersToMilimeters(5));