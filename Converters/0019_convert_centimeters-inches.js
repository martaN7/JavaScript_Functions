function centimetersToInches(value, unit){
    if(!Number(value)){
        return 'Invalid value!';
    }
    if(unit === 'cm'){
        return `${value} in is ${(value * 2.54).toFixed(2)} cm`;
    }else if(unit === 'in'){
        return  `${value} cm is ${(value * 0.39).toFixed(2)} in`;
    }else{
        return 'Invalid unit!';
    }
}

console.log(centimetersToInches(5, 'cm'));