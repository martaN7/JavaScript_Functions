function maskifyString(cc) {
    if (cc.length <= 3) return cc;
    return '#'.repeat(cc.length - 4) + cc.slice(cc.length - 4)
}
console.log(maskifyString("111"));
