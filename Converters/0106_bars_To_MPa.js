function barsToMPa(value) {
    return `${value} bar is ${(value * 100000) / 1000000} MPa`;
}