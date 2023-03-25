function getTangent(degrees) {
    if (isNaN(degrees)) return 'Wrong value!';
    let radians = degrees * Math.PI / 180;
    return Math.tan(radians);
}
console.log(getTangent(-1))
