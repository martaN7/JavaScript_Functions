function findWomen(nameArr) {
    return nameArr.filter(name => name.endsWith('a'));
}
console.log(findWomen(['Olek', 'Kasia', 'Ola', "Piotr", "Bartosz", "Karolina"]));
