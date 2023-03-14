function findOppositeVector(vector) {
    return vector.map(number => {
        if (number === 0) return 0;
        return -number;
    });
}






