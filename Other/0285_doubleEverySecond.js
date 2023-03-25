function doubleEverySecond(arr) {
    return arr.map((num, i) => i % 2 !== 0 ? num * 2 : num);
}

console.log(doubleEverySecond([1,2,3,4]))
