function flattenArray(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}

console.log(flattenArray([1,2,3,[9,4,7,3,1,8],5,7,[2,3],8,[1,2,3,[4,5,9],5],6] ))