function actualDimension(nominal, upperTol, lowerTol) {
    if (lowerTol > nominal) {
        return 'False tolerance';
    }
    return `The actual dimension is between ${nominal + lowerTol} and ${nominal + upperTol} mm`
}