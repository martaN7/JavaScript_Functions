function FahrenheitToKelvin(value){
    if(!Number(value)){
        return 'Invalid value!';
    }
    return `${value} Fahrenheit is ${((value + 459.67) * 5/9).toFixed(2)} Kelvin`;
}


console.log(FahrenheitToKelvin(3.646545, 'K'));