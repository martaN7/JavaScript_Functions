function currentDay(separator) {
    let dd = new Date().getDate();
    let mm = new Date().getMonth() + 1;
    let yyyy = new Date().getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return dd + separator + mm + separator + yyyy;
}
console.log(currentDay('*-*'));