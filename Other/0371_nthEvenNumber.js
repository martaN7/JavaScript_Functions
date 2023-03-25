function nthEvenNumber(n) {
    if (n <= 0) return `Provide numbers greater than 0`
    return n * 2 - 2;
}
console.log(nthEvenNumber(4))
