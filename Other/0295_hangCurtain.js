function hangCurtain(width, maxHookDist) {
    return 2 ** Math.ceil(Math.log2(width / Math.min(width, maxHookDist))) + 1;
}

console.log(hangCurtain(30, 15))
