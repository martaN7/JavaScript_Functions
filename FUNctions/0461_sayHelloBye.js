function sayHelloBye(name, n) {
    if (n !== 1 && n !== 0) return `Only 1 or 0 are acceptable numbers!`;
    return n === 1 ? `Hello ${name}` : `Bye ${name}`;
}
console.log(sayHelloBye('Alice', 1));