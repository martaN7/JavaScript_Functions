function describeYourAge(age) {
    return `You're ${
        age <= 12 ? 'kid' : age <= 17 ? 'teenager' : age <= 64 ? 'adult' : 'elderly'}`
}
console.log(describeYourAge(80));
