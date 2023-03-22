function isengard(repeatHobbits, repeatGard) {
    let lyrics = `they're taking the hobbits to Isengard \nthey're taking the hobbits to Isengard`;

    lyrics += (`\nthey're taking the hobbits to Isengard ` + 'gard '.repeat(repeatGard)).repeat(2);
    lyrics += `\nwhat did you say?`;
    lyrics += (`\n` + 'the hobbits '.repeat(repeatHobbits) + 'to Isengard to Isengard').repeat(2);

    console.log(lyrics);
}

isengard(5,4);