function upperCaseEnds(str) {
    return str.split(' ').map(word => word.slice(0, word.length - 1).toLowerCase() + word.charAt(word.length - 1).toUpperCase()).join(' ');
}

console.log(upperCaseEnds('tomato for dinner'))