function findCathetus(cathetus, hypotenuse) {
    return Math.sqrt(hypotenuse ** 2 - cathetus ** 2);
}

console.log(findCathetus(6,10));