function swapEndLetters(str) {
    return str.split(' ')
        .map(word => word[word.length - 1] + word.slice(1, word.length - 1) + word[0])
        .join(' ');
}
console.log(swapEndLetters('tomato for dinner'));
