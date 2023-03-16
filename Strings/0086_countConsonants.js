function countConsonants(str) {
    const regex = /[bcdfghjklmnprstvwzxq]/gi;
    const newStr = str.replace(/\s/g, '');
    return newStr.match(regex).length;
}