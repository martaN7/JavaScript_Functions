function countMen(nameArr) {
    const arr = nameArr.filter(name => !name.endsWith('a'));
    return !arr.length ? `No men in the group` : arr.length > 1 ? `${arr.length} men in the group` : `${arr.length} man in the group`;
}
console.log(countMen(['Olek', 'Kasia', 'Ola']));
