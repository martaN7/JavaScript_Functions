function findTriangleDots(triangle) {
    //1, 3, 6, 10, 15, 21, 28
    let dotsArr = [];
    for (let i = 1; i <= triangle; i++) {
        dotsArr.push(i);
    }

    return dotsArr.reduce((p, n) => p + n);
}
console.log(findTriangleDots(215));