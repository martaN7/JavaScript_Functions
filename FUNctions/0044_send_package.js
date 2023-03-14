function sendPackage(method) {
    //methods: mail, mailPriority, deliveryman
    const fate = Math.floor(Math.random() * 20 + 1);

    console.log(new Date().toLocaleTimeString() + ': Package registered...');

    if (method === 'mail') {
        return setTimeout(() => {
            return fate >= 10 ?
                console.log(new Date().toLocaleTimeString() + ' Package delivered by mail!')
                :
                console.log(new Date().toLocaleTimeString() + ' Package lost in mail!');
        }, 7000);
    }
    if (method === 'mailPriority') {
        return setTimeout(() => {
            return fate >= 10 ?
                console.log(new Date().toLocaleTimeString() + ' Priority package delivered by mail!')
                :
                console.log(new Date().toLocaleTimeString() + ' Priority package lost!');
        }, 4500);
    }
    if (method === 'courier') {
        return setTimeout(() => {
            return fate >= 10 ?
                console.log(new Date().toLocaleTimeString() + ' Package delivered by courier!')
                :
                console.log(new Date().toLocaleTimeString() + ' Courier lost the package');
        }, 2500);
    }

}