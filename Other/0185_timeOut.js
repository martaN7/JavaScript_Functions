function timeOut(seconds) {
    console.log(`Start!`)
    setTimeout(() => {
        console.log('Timeout!')
    }, seconds * 1000);
}

timeOut(2);
