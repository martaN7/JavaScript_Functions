function convertFahrenheitKelvin(valueToConvert, scale){
    if(!Number(valueToConvert)){
        return 'Invalid value!';
    }
    if(scale === 'kelvin'){
        return `${valueToConvert} Fahrenheit is ${Math.round((valueToConvert + 459.67) * 5/9)} Kelvin`;
    }else if(scale === 'fahrenheit'){
        return  `${valueToConvert} Kelvin is ${Math.round(valueToConvert * 5/9 - 459.67)} Fahrenheit`;
    }else{
        return 'Invalid temperature scale!';
    }
}


console.log(convertFahrenheitKelvin(3.646545, 'kelvin'));