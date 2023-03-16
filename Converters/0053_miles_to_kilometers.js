function milesToKilometers(value) {
    if (!Number(value)) {
        return 'Invalid value!';
    }
    return `${value} mi is ${(value * 1.61).toFixed(2)} km`;
}