function powerOddElems(arr) {
    return arr.map((num, i) => i % 2 === 0 ? num * num : num);
}
console.log(powerOddElems([1,2,3,4]))
