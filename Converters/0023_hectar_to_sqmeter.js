
function hectaresToSquareMeters(value){
    if(!Number(value)){
        return 'Invalid value!';
    }
    return `${value} ha is ${(value * 10000).toFixed(2)} sqm`;
}



// console.log(hectaresToSquareMeters(5, 'ha'));