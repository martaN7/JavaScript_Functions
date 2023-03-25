function letterGrid(size) {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
    const res = [];
    if (size < 0) return null;
    if (size === 1) return 'a'
    for (let i = 0; i < size; i++) {
        let str = '';
        for (let j = 0; j < size; j++) {
            str += (arr[(j + i) % 26] + ' ');
        }
        res.push(str.trim());
    }
    return res.join('\n');
}
console.log(letterGrid(5))
