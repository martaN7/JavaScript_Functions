function kilometersToSeaMiles(value){
    if(!Number(value)){
        return 'Invalid value!';
    }
    return  `${value} km is ${(value * 0.54).toFixed(2)} nmi`;
}

console.log(kilometersToSeaMiles(0.1, 'nmi'));