function helloGoodbye(phrase) {
    if (phrase === 'goodbye') {
        console.log(`
        Hello,
        Hello,
        I don't know why you say goodbye, I say hello
        `)
    } else {
        console.log(`Wrong phrase!`);
    }
}

helloGoodbye('stop');
