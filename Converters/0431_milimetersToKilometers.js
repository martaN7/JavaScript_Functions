function milimetersToKilometers(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} mm is ${(value * 0.000001)} km`;
}
console.log(milimetersToKilometers(5));
