function hectaresToSquareMeters(value, unit){
    if(!Number(value)){
        return 'Invalid value!';
    }
    if(unit === 'sqm'){
        return `${value} ha is ${(value * 10000).toFixed(2)} sqm`;
    }else if(unit === 'ha'){
        return  `${value} sqm is ${(value * 0.0001)} ha`;
    }else{
        return 'Invalid unit!';
    }
}

console.log(hectaresToSquareMeters(5, 'ha'));