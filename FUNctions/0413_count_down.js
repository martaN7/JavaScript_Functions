function countDown(number) {
    let i = 10;
    const myInt = setInterval(function () {
        console.log(i);
        i--;
        if (i === 0) {
            console.log('Time!');
            clearInterval(myInt);
        }
    }, 500);
}

countDown(10);