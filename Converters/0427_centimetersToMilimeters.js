function centimetersToMilimeters(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} cm is ${(value * 10)} mm`;
}
console.log(centimetersToMilimeters(5));
