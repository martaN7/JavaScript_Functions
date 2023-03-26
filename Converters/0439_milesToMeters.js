function milesToMeters(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} mi is ${(value * 1609.344)} m`;
}
console.log(milesToMeters(5));
