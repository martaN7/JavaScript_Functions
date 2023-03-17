function isPerfect(number) {
    let temp = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }

    if (temp === number && temp !== 0) return "It's a perfect number.";
    return "It isn't a perfect number.";
}