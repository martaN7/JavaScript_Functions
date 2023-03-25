function barman(drinks, shots) {
    let alcohol = drinks * 150 + shots * 50;
    return `The barman will need ${alcohol}ml of alcohol for this order`;
}
console.log(barman(25, 19));
