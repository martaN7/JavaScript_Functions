function zeroEverySecond(arr) {
    return arr.map((num, i) => i % 2 !== 0 ? 0 : num);
}

console.log(zeroEverySecond([1,2,3,4]))
