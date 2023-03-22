function multipleArrays(numbers1, numbers2) {
    let shorterArr = numbers1.length > numbers2.length ? numbers2 : numbers1;
    let longerArr = numbers1.length > numbers2.length ? numbers1 : numbers2;
    let newArr = [];

    for (let i = 0; i < shorterArr.length; i++) {
        newArr.push(numbers1[i] * numbers2[i]);
    }
    const restArr = longerArr.slice(shorterArr.length);
    return [...newArr, ...restArr];

}