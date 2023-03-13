function convertCelsiusFahrenheit(valueToConvert, scale){
    if(!Number(valueToConvert)){
        return 'Invalid value!';
    }
    if(scale === 'fahrenheit'){
        return `${valueToConvert} Celsius is ${Math.round(9/5 * valueToConvert + 32)} Fahrenheit`;
    }else if(scale === 'celsius'){
        return  `${valueToConvert} Fahrenheit is ${Math.round(5/9 * (valueToConvert - 32))} Celsius`;
    }else{
        return 'Invalid temperature scale!';
    }
}


console.log(convertCelsiusFahrenheit(25, 'celsius'));