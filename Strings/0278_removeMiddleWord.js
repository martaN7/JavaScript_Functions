function removeMiddleWord(string) {
    const arr = string.split(' ');
    if(arr.length % 2 !== 0){
        arr.splice((arr.length-1)/2,1);
        return arr.join(' ');
    }
    arr.splice((arr.length/2)-1,2);
    return arr.join(' ');
}

console.log(removeMiddleWord('tomato for dinner tonight'));
