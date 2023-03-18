function firstRepeatingCharacter(str) {
    const arr = [];
    for (let letter of str) {
        if (arr.includes(letter)) return letter;
        arr.push(letter);
    }
}

console.log(firstRepeatingCharacter('poOmaijxlakm'));