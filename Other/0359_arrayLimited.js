function arrayLimited(array, start, end) {
    return array.filter(v => (v >= start && v <= end));
}
console.log(arrayLimited([1,2,8,9,12,59,78,4], 3,10))
