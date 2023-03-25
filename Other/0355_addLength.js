function addLength(str) {
    return str.split(' ').map(word => `${word} ${word.length}`);
}
console.log(addLength('Ala ma kota'))
