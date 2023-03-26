function lowEnds(str) {
    return str.split(' ')
        .map(word => word[0].toLowerCase() + word.slice(1, word.length - 1).toUpperCase() + word[word.length - 1].toLowerCase())
        .join(' ');
}
console.log(lowEnds('tomato for dinner'));