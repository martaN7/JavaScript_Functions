function removeMiddleLetter(string) {
    if (string.length <= 2) return string;
    if (string.length % 2 !== 0) {
        return string.slice(0, (string.length - 1) / 2) + string.slice((string.length - 1) / 2 + 1);
    }
    if (string.length % 2 === 0) {
        return string.slice(0, (string.length - 1) / 2) + string.slice((string.length - 1) / 2 + 2);
    }
}

console.log(removeMiddleLetter('remy'));
