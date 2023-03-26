function whoIsOlder(person1, person2) {
    const d = new Date().getFullYear();
    return d - person1 > d - person2 ? 'Person 1 is older' : 'Person 2 is older';
}
console.log(whoIsOlder(1995, 1991));
