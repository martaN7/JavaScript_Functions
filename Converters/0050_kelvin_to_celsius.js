function kelvinToCelsius(value) {
    if (!Number(value)) {
        return 'Invalid value!';
    }
    return `${value} Kelvin is ${(value - 273.15).toFixed(2)} Celsius`;
}