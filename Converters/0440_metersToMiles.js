function metersToMiles(value) {
    if (!Number(value)) return 'Invalid value!';
    return `${value} m is ${(value * 0.000621)} mi`;
}
console.log(metersToMiles(5));
