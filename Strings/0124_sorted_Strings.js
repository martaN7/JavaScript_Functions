function sortedStrings(str1, str2) {
    return [...new Set((str1 + str2).toLowerCase())].sort().join('');
}

console.log(sortedStrings('pomidor', 'trawa'));