function addHyphen(number) {
    return Array.from(String(number)).map((num, i, arr) => {
        if (i === arr.length - 1) return num;
        return num + '-';
    }).join('');
}

console.log(addHyphen(12367));