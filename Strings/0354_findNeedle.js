function findNeedle(haystack) {
    return `I found the needle at position ${haystack.indexOf("needle")}`;
}
console.log(findNeedle(['hay', 'junk', 'hay', 'moreJunk', 'needle', 'randomJunk']))
