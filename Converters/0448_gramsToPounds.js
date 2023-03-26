function gramsToPounds(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} g is ${(value * 0.002205)} lb`;
}
console.log(gramsToPounds(5));
