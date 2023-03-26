function findYear(month, dayOfWeek) {
    for (let i = 2014; i < 2051; i++)
        if (new Date(i, month, 1).getDay() === dayOfWeek) return i;
    return 0;
}

console.log(findYear(10, 5))