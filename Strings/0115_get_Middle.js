function getMiddle(word) {
    return word.length % 2 === 0
        ? word.substr(word.length / 2 - 1, 2)
        : word.charAt((word.length - 1) / 2);
}

console.log(getMiddle("ala"))