function repeatLetters(s) {
    return [...s].map((l, i) => l.toUpperCase() + l.repeat(i).toLowerCase()).join('-')
}