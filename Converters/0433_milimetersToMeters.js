function milimetersToMeters(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} mm is ${(value * 0.001)} m`;
}
console.log(milimetersToMeters(5));