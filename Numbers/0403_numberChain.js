function numberChain(start, length, gap) {
    let arr = [];
    for (let i = 0, j = start; i < length; i++) {
        arr.push(j);
        j += gap;
    }
    console.log(arr.join(' '));
}

numberChain(3, 10, 5);
