function detectWord(string) {
    return [...string].filter(char => char.toLowerCase()===char).join('');
}


console.log(detectWord("mHUOHJoKnIJKNTkTReSDCyTR"));
