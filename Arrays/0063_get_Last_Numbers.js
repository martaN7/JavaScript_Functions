function getLastNumbers(n, numbers) {
    if (n > numbers.length) {
        return 'Value is bigger than the array!';
    } else if (n === 0) {
        return [];
    }
    return numbers.slice(-n);
}