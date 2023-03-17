function mergeIntegerArrays(arr1, arr2) {
    return [...(new Set([...arr1, ...arr2]))].sort((a, b) => a - b)
}

console.log(mergeIntegerArrays([1,2,3,5,1], [5,6,8,1,5]));