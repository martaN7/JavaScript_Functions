function findMen(nameArr) {
    return nameArr.filter(name => !name.endsWith('a'));
}
console.log(findMen(['Olek', 'Kasia', 'Ola', "Piotr", "Bartosz", "Karolina"]));
