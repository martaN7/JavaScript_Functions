function seaMilesToKilometers(value) {
    if (!Number(value)) {
        return 'Invalid value!';
    }
    return `${value} nmi is ${(value * 1.852).toFixed(2)} km`;
}