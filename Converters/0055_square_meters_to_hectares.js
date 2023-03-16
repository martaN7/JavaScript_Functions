function squareMetersToHectares(value) {
    if (!Number(value)) {
        return 'Invalid value!';
    }
    return `${value} sqm is ${(value * 0.0001)} ha`;
}