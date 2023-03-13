function getPokemonCase(str) {
    const newStr = str.replace(/\s/g, '');
    return [...newStr].map((l, i) => {
        if (i % 2 === 0) {
            return l.toUpperCase();
        } else {
            return l.toLowerCase();
        }
    }).join('');

}