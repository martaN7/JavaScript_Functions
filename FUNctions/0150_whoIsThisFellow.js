export function whoIsThisFellow(name) {
    switch (name) {
        case "Aragorn":
            console.log(`This is ${name}, son of Arathorn, Isildur's heir`);
            break
        case "Legolas":
            console.log(`This is ${name}, son of Thranduil`);
            break;
        case "Gimli":
            console.log(`This is ${name}, son of Gloin`);
            break;
        default:
            console.log(`I don't know this ${name} fellow!`);
            break;
    }
}

whoIsThisFellow('Gimli');