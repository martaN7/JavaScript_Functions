function doubleOddElems(arr) {
    return arr.map((num, i) => i % 2 === 0 ? num * 2 : num);
}

console.log(doubleOddElems([1,2,3,4]))
