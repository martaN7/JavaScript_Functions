function inchesToCentimeters(value) {
    if (!Number(value)) {
        return 'Invalid value!';
    }
    return `${value} in is ${(value * 2.54).toFixed(2)} cm`;
}