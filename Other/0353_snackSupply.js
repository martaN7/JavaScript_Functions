function snackSupply(age, amountPerDay, snackName) {
    const maxAge = 100;
    let totalNeeded = (amountPerDay * 365) * (maxAge - age);
    console.log(`You will need ${totalNeeded} ${snackName} to last you until you're ${maxAge} years old`);
}
snackSupply(29, 8, 'snickers');
