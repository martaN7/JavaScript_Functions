function countEveryDuplicateChar(string) {
    const strArr = string.replace(/\s/g, '').replace(/[?!.,:;'-]/g, '').toLowerCase().split('');

    const map = new Map();

    for (let l of strArr) {
        if (map.has(l)) {
            let k = map.get(l);

            map.set(l, k + 1);
        } else {
            map.set(l, 1);
        }
    }
    return map;
}


console.log(countEveryDuplicateChar('quick brown fox'));