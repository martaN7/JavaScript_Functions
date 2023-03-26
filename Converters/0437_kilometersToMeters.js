function kilometersToMeters(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} km is ${(value * 1000)} m`;
}
console.log(kilometersToMeters(5));
