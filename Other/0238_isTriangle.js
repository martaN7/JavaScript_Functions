function isTriangle(a, b, c) {
    const sorted = [...arguments].sort((a, b) => b - a);
    return sorted[1] + sorted[2] > sorted[0];
}

console.log(isTriangle(1,5,7))