function howMuchILoveYou(nbPetals) {
    return ["I love you", "a little", "a lot", "passionately", "madly", "not at all"].at((nbPetals % 6) - 1);
}