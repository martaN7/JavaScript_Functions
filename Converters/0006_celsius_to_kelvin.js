function CelsiusToKelvin(value){
    if(!Number(value)){
        return 'Invalid value!';
    }
    return `${value} Celsius is ${(273.15 + value).toFixed(2)} Kelvin`;
}


console.log(CelsiusToKelvin(3.646545, 'K'));