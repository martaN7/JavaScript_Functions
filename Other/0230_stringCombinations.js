function stringCombinations(str) {
    const result = [];

    function search_combination(start, curr) {
        if (curr.length > 0) {
            result.push(curr);
        }
        for (let i = start; i < str.length; i++) {
            search_combination(i + 1, curr + str[i]);
        }
    }

    search_combination(0, '');
    return result;
}

console.log(stringCombinations('dog'));