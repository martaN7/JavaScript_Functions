function moodyPromise() {

    let fate = Math.floor(Math.random() * 10 + 1);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fate <= 5) {
                resolve("Promise resolved");
            } else {
                reject(new Error("Promise rejected"));
            }

        }, 1000);

    });
}

moodyPromise()
    .then(data => console.log(data))
    .catch(e => console.log(e.message));