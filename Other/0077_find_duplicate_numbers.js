function findDuplicateNumbers(numbers) {
    let values = {};
    const duplicates = [];
    for (let item of numbers) {
        values[item] = values[item] ? values[item] + 1 : 1;
    }

    for (let lol in values) {
        if (values[lol] > 1) {
            duplicates.push(parseInt(lol));
        }
    }
    return duplicates;
}