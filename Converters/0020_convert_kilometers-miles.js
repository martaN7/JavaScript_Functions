function kilometersToMiles(value){
    if(!Number(value)){
        return 'Invalid value!';
    }
    return  `${value} km is ${(value * 0.62).toFixed(2)} mi`;
}

console.log(kilometersToMiles(5));