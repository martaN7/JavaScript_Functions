function howOldAmI(birthYear) {
    const d = new Date().getFullYear();
    return d - birthYear;
}
console.log(howOldAmI(1968));
