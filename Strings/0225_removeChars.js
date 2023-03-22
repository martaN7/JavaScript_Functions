function removeChars(string) {
    return string.split(' ').map(word => word.length === 1 ? word : word.slice(1, -1)).join(' ');

}
console.log(removeChars('pomidor zjadł banana, a Ela zapłakana'));