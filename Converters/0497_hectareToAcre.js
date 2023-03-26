function hectareToAcre(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} ha is ${value * 2.471} ac`;
}
console.log(hectareToAcre(5));
