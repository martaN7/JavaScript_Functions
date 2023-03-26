function isWBeforeM(arr) {
    return arr.findIndex(l => l === "w") < arr.findIndex(l => l === "m");
}

console.log(isWBeforeM(['t','w','a','b','m']));
