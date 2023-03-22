function sortNumber(number) {
    return Array.from(String(number))
        .map(num => Number(num))
        .sort((a, b) => a - b)
        .join('');
}

console.log(sortNumber(35046051));