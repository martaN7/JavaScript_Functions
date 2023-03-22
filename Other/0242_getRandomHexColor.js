function getRandomHexColor() {
    return `#${Math.random().toString(16).substr(2, 6)}`;
}

console.log(getRandomHexColor());
