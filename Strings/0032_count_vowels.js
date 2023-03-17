function countVowels(str) {
    const regex = /[aeiouy]/gi;
    const newStr = str.replace(/\s/g, '');
    return newStr.match(regex).length;
}
