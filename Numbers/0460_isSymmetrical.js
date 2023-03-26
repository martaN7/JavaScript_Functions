function isSymmetrical(num) {
    const str = String(num);
    return str.split('').reverse().join('') === str;
}
console.log(isSymmetrical(12325));
