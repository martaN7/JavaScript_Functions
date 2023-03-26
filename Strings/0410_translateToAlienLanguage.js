function translateToAlienLanguage(string) {
    return string
        .toLowerCase()
        .split(' ')
        .map(word =>
            word.split(``)
                .reverse()
                .join(``)
                .replace(/([aeiou])/g, "$1$1")
        ).join(' ');
}

console.log(translateToAlienLanguage('tomato for dinner today'))