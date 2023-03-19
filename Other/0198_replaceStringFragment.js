function replaceStringFragment(string, oldWord, newWord) {
    const reg = new RegExp(oldWord, "gi");
    return string.replace(reg, newWord);
}
console.log(replaceStringFragment("Please visit Microsoft!", "microsoft", "Bali"))
