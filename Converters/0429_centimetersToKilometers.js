function centimetersToKilometers(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} cm is ${(value * 0.00001)} km`;
}

console.log(centimetersToKilometers(5));
