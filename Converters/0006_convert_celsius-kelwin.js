function convertCelsiusKelvin(valueToConvert, scale){
    if(!Number(valueToConvert)){
        return 'Invalid value!';
    }
    if(scale === 'K'){
        return `${valueToConvert} Celsius is ${(273.15 + valueToConvert).toFixed(2)} Kelvin`;
    }else if(scale === 'C'){
        return  `${valueToConvert} Kelvin is ${(valueToConvert - 273.15).toFixed(2)} Celsius`;
    }else{
        return 'Invalid temperature scale!';
    }
}


console.log(convertCelsiusKelvin(3.646545, 'K'));