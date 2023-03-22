function findDuplicateNumbers(numbers) {
    let values = {};
    const duplicates = [];
    for (let item of numbers) {
        values[item] = values[item] ? values[item] + 1 : 1;
    }

    for (let num in values) {
        if (values[num] > 1) {
            duplicates.push(parseInt(num));
        }
    }
    return duplicates;
}

console.log(findDuplicateNumbers([3,5,3,6,9,1,2,3,5,7,1]));