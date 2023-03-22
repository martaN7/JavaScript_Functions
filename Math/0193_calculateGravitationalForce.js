function calculateGravitationalForce(mass1, mass2, distance) {
    return (mass1 * mass2 * (6, 674 * Math.pow(10, -11))) / distance ** 2;
}