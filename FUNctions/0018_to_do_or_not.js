function shouldIDoIt(name){
    const fate = Math.floor(Math.random() * 20 + 1);

    return fate < 11 ? `You shouldn't do it ${name}!` : `You should do it ${name}!`;
}

console.log(shouldIDoIt('Karolina'));