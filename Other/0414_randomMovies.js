function randomMovies(movies) {
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
    return movies[random(0, movies.length)];


}


console.log(randomMovies(["Harry Potter", "Gladiator", "Jurassic Park", "Deadfall"]));