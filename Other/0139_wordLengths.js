function wordLengths(string) {
    return string.split(' ').map(word => word.length);
}

console.log(wordLengths('Quick brown fox'));