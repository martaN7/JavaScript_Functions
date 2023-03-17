function isIsogram(str) {
    const arr = str.toLowerCase().split('');
    return arr.every(l => arr.indexOf(l) === arr.lastIndexOf(l));
}