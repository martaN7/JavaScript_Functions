function flightRoutes(travel) {
    let routes = [];
    for (let i = 0; i < travel.length; i++) {
        routes.push(travel[i].in);
        routes.push(travel[i].out);
    }
    return routes.filter((r, i) => r !== routes[i + 1]).join("-");
}

console.log(flightRoutes( [
    {in: "TRN", out: "FCO"},
    {in: "FCO", out: "JFK"},
    {in: "JFK", out: "FCO"}
]));
