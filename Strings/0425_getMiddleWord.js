function getMiddleWord(string) {
    const arr = string.split(' ');
    if (arr.length % 2 !== 0) {
        return arr.splice((arr.length - 1) / 2, 1).join(' ');
    }
    return arr.splice((arr.length / 2) - 1, 2).join(' ');
}
console.log(getMiddleWord('tomato for dinner'));
