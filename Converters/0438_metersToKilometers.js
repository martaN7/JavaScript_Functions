function metersToKilometers(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} m is ${(value / 1000)} km`;
}
console.log(metersToKilometers(5));
