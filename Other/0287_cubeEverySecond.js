function cubeEverySecond(arr) {
    return arr.map((num, i) => i % 2 !== 0 ? num ** 3 : num);
}

console.log(cubeEverySecond([1,2,3,4]))
