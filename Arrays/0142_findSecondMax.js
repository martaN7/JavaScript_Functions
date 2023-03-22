function findSecondMax(arr) {
    return arr.sort((a, b) => b - a)[1];
}

console.log(findSecondMax([1,2,3,4,5]));