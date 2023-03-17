function longestWord(string) {
    return string.split(' ').sort((a, b) => b.length - a.length)[0];
}

console.log(longestWord('Quick browny fox'));