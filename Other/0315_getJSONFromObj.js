function getJSONFromObj(obj) {
    return JSON.stringify(obj);
}
console.log(getJSONFromObj({ name:"John", age:31, city:"New York" }))
