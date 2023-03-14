function fahrenheitToCelsius(value) {
    if (!Number(value)) {
        return 'Invalid value!';
    }
    return `${value} Fahrenheit is ${(5 / 9 * (value - 32)).toFixed(2)} Celsius`;
}