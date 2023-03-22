function countEveryDuplicateNumber(numbers) {
    const map = new Map();

    for (let num of numbers) {
        if (map.has(num)) {
            let k = map.get(num);

            map.set(num, k + 1);
        } else {
            map.set(num, 1);
        }

    }
    return map;
}

console.log(countEveryDuplicateNumber([1,5,9,7,3,5,4,9]));