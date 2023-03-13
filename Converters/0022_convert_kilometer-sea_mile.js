function kilometersToSeaMiles(value, unit){
    if(!Number(value)){
        return 'Invalid value!';
    }
    if(unit === 'km'){
        return `${value} nmi is ${(value * 1.852).toFixed(2)} km`;
    }else if(unit === 'nmi'){
        return  `${value} km is ${(value * 0.54).toFixed(2)} nmi`;
    }else{
        return 'Invalid unit!';
    }
}

console.log(kilometersToSeaMiles(0.1, 'nmi'));