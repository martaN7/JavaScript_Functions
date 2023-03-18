function sortByProperty(objArr, prop) {
    return objArr.sort((a, b) => a[prop] - b[prop]);
}

console.log(sortByProperty([{'width': 50, 'length': 30}, {'width': 25, 'length': 15},
    {'width': 61, 'length': 42}, {'width': 10, 'length': 71}], 'length'));