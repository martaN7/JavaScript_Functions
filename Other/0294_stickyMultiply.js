function stickyMultiply(val1, val2) {
    const sticky = Number(`${Math.round(val1)}` + `${Math.round(val2)}`);
    return sticky * val2;
}
console.log(stickyMultiply( 11, 22));
