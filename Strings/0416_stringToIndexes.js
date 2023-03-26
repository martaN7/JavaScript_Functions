function stringToIndexes(str) {
    return str.split(' ').map((word, i) => i).join('');
}
console.log(stringToIndexes('Ala ma kota'));