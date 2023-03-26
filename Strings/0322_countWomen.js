function countWomen(nameArr) {
    const arr = nameArr.filter(name => name.endsWith('a'));
    return !arr.length ? `No women in the group` : arr.length > 1 ? `${arr.length} women in the group` : `${arr.length} woman in the group`;
}
console.log(countWomen(['Olek', 'Kasia', 'Ola', "Piotr", "Bartosz", "Karolina"]));
