function compressString(string) {
    return string.split(' ').map(word => word.length).join('');
}

console.log(compressString('ala ma kota kwiatki i wariatki'))
