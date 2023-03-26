function gramsToCarats(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} g is ${(value * 5)} ct`;
}
console.log(gramsToCarats(5));
