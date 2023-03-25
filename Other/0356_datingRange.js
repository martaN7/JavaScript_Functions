function datingRange(age) {
    return age >= 14 ?
        `${Math.floor(age / 2 + 10)}-${Math.floor((age - 9) * 2)}`
        :
        `${Math.floor(age - (age * 0.1))}-${Math.floor(age + (age * 0.1))}`
}
console.log(datingRange(29));
