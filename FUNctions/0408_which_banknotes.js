function whichBanknotes(n) {
    if (n <= 0) return `Choose amount bigger than 0!`
    let [a, b, c, d, e, f] = [0, 0, 0, 0, 0, 0];
    while (n >= 500) {
        a++;
        n -= 500;
    }
    while (n >= 200) {
        b++;
        n -= 200;
    }
    while (n >= 100) {
        c++;
        n -= 100;
    }
    while (n >= 50) {
        d++;
        n -= 50;
    }
    while (n >= 20) {
        e++;
        n -= 20;
    }
    while (n >= 10) {
        f++;
        n -= 10;
    }
    if (n < 10) {
        f++;
    }
    return `Banknotes needed:
    500$ - ${a}
    200$ - ${b}
    100$ - ${c}
    50$ - ${d}
    20$ - ${e}
    10$ - ${f}
    `
}

console.log(whichBanknotes(5));