function emotifySentence(str) {
    const [first, mid, last] = str.split(" ");

    const emotify = {
        "smile": ":D",
        "grin": ":)",
        "sad": ":(",
        "mad": ":P"
    }
    return `${first} ${mid} ${emotify[last]}`;
}
console.log(emotifySentence('Make me smile'));
