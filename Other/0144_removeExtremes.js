function removeExtremes(arr) {
    return arr.sort((a, b) => a - b).filter((n, i, arr) => i !== 0 && i !== arr.length - 1);
}