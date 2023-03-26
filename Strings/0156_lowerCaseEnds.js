function lowerCaseEnds(str) {
    return str.split(' ')
        .map(word => word.slice(0, word.length - 1).toUpperCase() + word.charAt(word.length - 1).toLowerCase())
        .join(' ');
}

console.log(lowerCaseEnds('tomato for dinner'));


