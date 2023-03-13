function convertCelsiusFahrenheit(valueToConvert, scale){
    if(!Number(valueToConvert)){
        return 'Invalid value!';
    }
    if(scale === 'F'){
        return `${valueToConvert} Celsius is ${(9/5 * valueToConvert + 32).toFixed(2)} Fahrenheit`;
    }else if(scale === 'C'){
        return  `${valueToConvert} Fahrenheit is ${(5/9 * (valueToConvert - 32)).toFixed(2)} Celsius`;
    }else{
        return 'Invalid temperature scale!';
    }
}


console.log(convertCelsiusFahrenheit(25, 'C'));