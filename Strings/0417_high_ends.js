function highEnds(str) {
    return str.split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1, word.length - 1).toLowerCase() + word[word.length - 1].toUpperCase())
        .join(' ');
}

console.log(highEnds('tomato for dinner'));
