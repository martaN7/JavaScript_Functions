function kilometersToMiles(value, unit){
    if(!Number(value)){
        return 'Invalid value!';
    }
    if(unit === 'km'){
        return `${value} mi is ${(value * 1.61).toFixed(2)} km`;
    }else if(unit === 'mi'){
        return  `${value} km is ${(value * 0.62).toFixed(2)} mi`;
    }else{
        return 'Invalid unit!';
    }
}

console.log(kilometersToMiles(5, 'km'));