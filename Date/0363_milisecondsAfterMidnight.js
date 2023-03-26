function milisecondsAfterMidnight(hours, minutes, seconds) {
    return (hours * 3600 + minutes * 60 + seconds) * 1000;
}
console.log(milisecondsAfterMidnight(1,2,30));
