function bomb(string) {
    if (string.match(/bomb/gi)) {
        return "Duck!!!";
    } else return "Ufff there is no bomb."
}
console.log(bomb("There is a bomb."));
