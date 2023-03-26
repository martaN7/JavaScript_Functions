function megabytesToBits(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} MB is ${value * 8000000} b`;
}
console.log(megabytesToBits(5));