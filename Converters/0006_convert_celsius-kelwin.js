function convertCelsiusKelvin(valueToConvert, scale){
    if(!Number(valueToConvert)){
        return 'Invalid value!';
    }
    if(scale === 'kelvin'){
        return `${valueToConvert} Celsius is ${Math.round(273.15 + valueToConvert)} Kelvin`;
    }else if(scale === 'celsius'){
        return  `${valueToConvert} Kelvin is ${Math.round(valueToConvert - 273.15)} Celsius`;
    }else{
        return 'Invalid temperature scale!';
    }
}


console.log(convertCelsiusKelvin(3.646545, 'kelvin'));