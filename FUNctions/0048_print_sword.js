function printSword(length) {
    const bladeChars = 'Ξ';
    const swordChars = '{|}oo(X)>';

    const swordPattern = Array.from(swordChars);
    const hilt = swordPattern.slice(0, 8);
    const point = swordPattern.slice(8, swordPattern.length);

    const blade = Array(length).fill(bladeChars);

    return hilt.concat(blade, point).join('');
}