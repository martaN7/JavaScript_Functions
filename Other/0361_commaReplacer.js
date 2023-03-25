function commaReplacer(str, char) {
    return str.replace(/,/g, char);
}
console.log(commaReplacer('ala ma kota, kot ma pchły, wilk ma kły', ' lol'));
