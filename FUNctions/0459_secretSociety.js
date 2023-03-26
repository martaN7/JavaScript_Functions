function secretSociety(names) {
    let secret = '';
    names.forEach(name => secret += name[0]);
    return secret;
}
console.log(secretSociety(["Phoebe", "Brennan", "Zac", "Ross", "Monica", "Izzy"]));
