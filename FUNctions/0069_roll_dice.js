//available dices: d4, d6, d8, d10, d12, d20
function rollTheDice(dice){
    if(dice === 'd4'){
        return Math.floor(Math.random() * 4 + 1);
    }
    if(dice === 'd6'){
        return Math.floor(Math.random() * 6 + 1);
    }
    if(dice === 'd8'){
        return Math.floor(Math.random() * 8 + 1);
    }
    if(dice === 'd10'){
        return Math.floor(Math.random() * 10 + 1);
    }
    if(dice === 'd12'){
        return Math.floor(Math.random() * 12 + 1);
    }
    if(dice === 'd20'){
        return Math.floor(Math.random() * 20 + 1);
    }
}



