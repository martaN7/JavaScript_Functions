function shortestWord(string) {
    return string.split(' ').sort((a, b) => a.length - b.length)[0];
}

console.log(shortestWord('Quick browny fox'));