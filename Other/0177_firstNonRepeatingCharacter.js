function firstNonRepeatingCharacter(str) {
    const arr = [];
    for (let letter of str) {
        if (!arr.includes(letter)) arr.push(letter);
    }
    return arr[0];
}

console.log(firstNonRepeatingCharacter('poomaijxlakm'));