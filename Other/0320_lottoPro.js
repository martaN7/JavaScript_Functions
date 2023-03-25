function lottoPro(...args) {
    if (args.length !== 7) return `You must choose 5 numbers`
    let lottoArr = [];
    for (let i = 1; i <= 7; i++) {
        lottoArr.push(Math.floor(Math.random() * 25 + 1));
    }
    let playerArr = [];
    args.forEach(num => {
        if (lottoArr.includes(num)) {
            playerArr.push(num);
        }
    });

    switch (playerArr.length) {
        case 2:
            return `2 matches, you win 20$`
        case 3:
            return `3 matches, you win 40$`
        case 4:
            return `4 matches, you win 70$`
        case 5:
            return `5 matches, you win 100$`
        case 6:
            return `6 matches, you win 200$`
        case 7:
            return `7 matches, you win 500$`
        default:
            return `You win nothing`
    }
}
console.log(lottoPro(1,9,14,6,19,21,8))
