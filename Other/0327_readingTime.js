function readingTime(bookPages, minutesForPage) {
    return `You'll finish this book in ${(bookPages * minutesForPage) / 60} h`
}
console.log(readingTime(500, 3));
