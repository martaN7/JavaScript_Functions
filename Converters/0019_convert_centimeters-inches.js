function centimetersToInches(value){
    if(!Number(value)){
        return 'Invalid value!';
    }
    return  `${value} cm is ${(value * 0.39).toFixed(2)} in`;
}

console.log(centimetersToInches(5));