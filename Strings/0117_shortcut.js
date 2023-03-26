function shortcut(string) {
    return [...string].reduce((acc, ce) => acc + ("aeiou".includes(ce) ? "" : ce), "")
}

console.log(shortcut('tomato'))