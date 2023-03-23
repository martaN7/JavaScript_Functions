function getArccosine(x) {
    if (isNaN(x) || (-1 > x) || (x > 1)) return 'Wrong value!';
    return Math.acos(x);
}

console.log(getArccosine(-1))
