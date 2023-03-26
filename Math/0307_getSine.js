function getSine(degrees) {
    if (isNaN(degrees)) return 'Wrong value!';
    let radians = degrees * Math.PI / 180;
    return Math.sin(radians);
}
console.log(getSine(-1))
