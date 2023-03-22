function multiplyDuplicatesOfNumbers(n, numbers) {
    if (!numbers.includes(n)) return null;
    return numbers.filter(number => number === n).reduce((p, n) => p * n);
}

console.log(multiplyDuplicatesOfNumbers(2,[2,3,8,7,2]));
