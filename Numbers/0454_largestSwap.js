function largestSwap(n) {
    if (10 > n >= 100) return `Provide a two-digit number`;
    const rev = Number(Array.from(String(n)).reverse().join(''));
    return n > rev;
}
console.log(largestSwap(21));
