function tickTock(repeat) {
    let counter = 0;
    let myInt;


    myInt = setInterval(() => {
        if (counter >= repeat - 1) {
            clearInterval(myInt);
        }
        if (counter % 2 !== 0) {
            console.log('TOCK');
            counter++;
        } else {
            console.log('TICK');
            counter++;
        }

    }, 1000);

}