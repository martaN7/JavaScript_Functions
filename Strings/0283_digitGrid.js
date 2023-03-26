function digitGrid(size) {
    const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const res = [];
    if (size < 0) return null;
    if (size === 1) return 'a'
    for (let i = 0; i < size; i++) {
        let str = '';
        for (let j = 0; j < size; j++) {
            str += (arr[(j + i) % 10] + ' ');
        }
        res.push(str.trim());
    }
    return res.join('\n');
}

console.log(digitGrid(9))
