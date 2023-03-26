function shoutWord(word) {
    const arr = word.toUpperCase().split('');
    let i = 0;
    const myInt = setInterval(function () {
        console.log(arr[i]);
        i++;
        if (i === arr.length) {
            clearInterval(myInt);
        }
    }, 500);
}

// shoutWord('potatoes');

