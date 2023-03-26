function centimetersToMeters(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} cm is ${(value / 100)} m`;
}
console.log(centimetersToMeters(5));
