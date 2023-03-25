function lotto(...args) {
    if (args.length !== 5) return `You must choose 5 numbers`;
    let lottoArr = [];
    for (let i = 1; i <= 5; i++) {
        lottoArr.push(Math.floor(Math.random() * 20 + 1));
    }
    let playerArr = [];
    args.forEach(num => {
        if (lottoArr.includes(num)) {
            playerArr.push(num);
        }
    });

    switch (playerArr.length) {
        case 0:
            return `You win nothing`
        case 1:
            return `One match, but you win nothing`
        case 2:
            return `2 matches, you win 20$`
        case 3:
            return `3 matches, you win 30$`
        case 4:
            return `4 matches, you win 60$`
        case 5:
            return `5 matches, you win 100$`
    }
}
console.log(lotto(1,9,14,6,19))
