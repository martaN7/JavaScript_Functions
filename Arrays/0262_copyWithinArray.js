function copyWithinArray(arr, target, start = 0, end = arr.length) {
    console.log(arr.entries());
    return arr.copyWithin(target, start, end);
}
console.log(copyWithinArray(['a', 'b', 'c', 'd', 'e'], 1, 0));