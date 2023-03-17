function addDuplicatesOfNumbers(n, numbers) {
    if (!numbers.includes(n)) return null;
    return numbers.filter(number => number === n).reduce((p, n) => p + n);
}

console.log(addDuplicatesOfNumbers(3, [3,5,3,6,9,1,2,3,5,7,1]));