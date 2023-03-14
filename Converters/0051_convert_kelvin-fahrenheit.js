function kelvinToFahrenheit(value) {
    if (!Number(value)) {
        return 'Invalid value!';
    }
    return `${value} Kelvin is ${(value * 5 / 9 - 459.67).toFixed(2)} Fahrenheit`;
}