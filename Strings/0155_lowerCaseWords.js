function lowerCaseWords(str) {
    return str.split(' ').map(word => word.charAt(0).toLowerCase() + word.slice(1).toUpperCase()).join(' ');
}

console.log(lowerCaseWords('tomato for dinner'))