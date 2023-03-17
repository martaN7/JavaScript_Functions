function findSecondMin(arr) {
    return arr.sort((a, b) => a - b)[1];
}

console.log(findSecondMin([1,2,3,4,5]));