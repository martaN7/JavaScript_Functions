function bigVowels(string) {
    return string.toLowerCase().split('').map(letter => {
        if ("aeiouy".includes(letter)) return letter.toUpperCase();
        return letter;
    }).join('');
}

console.log(bigVowels('Training'));