function powerEverySecond(arr) {
    return arr.map((num, i) => i % 2 !== 0 ? num * num : num);
}
console.log(powerEverySecond([1,2,3,4]))
