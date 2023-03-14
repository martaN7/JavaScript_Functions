function CelsiusToFahrenheit(value){
    if(!Number(value)){
        return 'Invalid value!';
    }
    return `${value} Celsius is ${(9/5 * value + 32).toFixed(2)} Fahrenheit`;


}




console.log(CelsiusToFahrenheit(25, 'C'));