function censor(textToCensor, phraseToCensor) {
    const re = new RegExp(phraseToCensor, "gi",);
    return textToCensor.replace(re, 'tomato');
}