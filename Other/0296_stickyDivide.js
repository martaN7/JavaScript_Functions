function stickyDivide(val1, val2) {
    const sticky = Number(`${Math.round(val1)}` + `${Math.round(val2)}`);
    return sticky / val2;
}

console.log(stickyDivide( 11, 22));
