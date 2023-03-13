function convertFahrenheitKelvin(valueToConvert, scale){
    if(!Number(valueToConvert)){
        return 'Invalid value!';
    }
    if(scale === 'K'){
        return `${valueToConvert} Fahrenheit is ${((valueToConvert + 459.67) * 5/9).toFixed(2)} Kelvin`;
    }else if(scale === 'F'){
        return  `${valueToConvert} Kelvin is ${(valueToConvert * 5/9 - 459.67).toFixed(2)} Fahrenheit`;
    }else{
        return 'Invalid temperature scale!';
    }
}


console.log(convertFahrenheitKelvin(3.646545, 'K'));