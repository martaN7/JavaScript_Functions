function yearDays(year) {
    const isLeap = (!(year % 100) && year % 400) || year % 4;
    return `year ${year} has ${isLeap ? '365' : '366'} days`;
}
console.log(yearDays(2005));
