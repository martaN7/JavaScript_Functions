function multipliedNumberChain(start, length, multiplier) {
    let arr = [];
    for (let i = 0, j = start; i < length; i++) {
        arr.push(j);
        j *= multiplier;
    }
    console.log(arr.join(' '));
}
multipliedNumberChain(3, 10, 2);
