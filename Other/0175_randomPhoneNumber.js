function randomPhoneNumber() {
    const nums = '1234567890';
    let number = '';

    for (let i = 1; i <= 11; i++) {
        if (i === 4 || i === 8) {
            number += '-';
        } else {
            number += nums.charAt(Math.floor(Math.random() * nums.length));
        }
    }
    console.log(number);
}

randomPhoneNumber();