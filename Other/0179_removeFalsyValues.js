function removeFalsyValues(arr) {
    return arr.filter((val) => val);
}
console.log(removeFalsyValues([5, '', undefined, 4, 'a', 0, 7, null, [], 3]));