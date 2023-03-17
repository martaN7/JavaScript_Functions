function reverseNumber(number) {
    return Number(Array.from(String(number))
        .reverse()
        .join(''));
}

console.log(reverseNumber(158));