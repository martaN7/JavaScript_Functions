function exclamations(string) {
    return string.replace(/[aeoiu]/gi, "!");
}
console.log(exclamations('Hello!'))
