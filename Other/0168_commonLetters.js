function commonLetters(word1, word2) {
    const set1 = new Set(word1);
    const set2 = new Set(word2);
    return [...set1].filter((x) => set2.has(x));
}

console.log(commonLetters('forest', 'tree'));