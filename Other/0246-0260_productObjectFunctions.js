const products = [
    {
        name: 'blouse',
        size: 'L',
        price: 34.9,
        color: 'red',
        qty: 15,
    },
    {
        name: 't-shirt',
        size: 'S',
        price: 27.5,
        color: 'black',
        qty: 9,
    },
    {
        name: 'hoodie',
        size: 'M',
        price: 57.47,
        color: 'grey',
        qty: 21,
    },
    {
        name: 'jeans',
        size: 'L',
        price: 87.20,
        color: 'blue',
        qty: 10,
    }
]

//246
function getAllProducts(){
    return products.forEach(product => console.log(product.name));
}
getAllProducts();

//247
function sortProducts(property){
    return products.sort((a,b) => a[property] - b[property]);
}

console.log(sortProducts('price'));

//248
function getCheapestProduct(){
    console.log(products.sort((a,b) => a.price - b.price)[0]);
}

getCheapestProduct();

//249
function getExpensiveProduct(){
    console.log(products.sort((a,b) => b.price - a.price)[0]);
}

getExpensiveProduct();

//250
function makeDiscount(percentage){
    console.log(products.map(product => {
        return {
            ...product,
            price: product.price * percentage / 100,
        }
    }));
}

makeDiscount(50);

//251
function addProduct(name, size, price, color, qty = 10){
    products.push({
        name,
        size,
        price,
        color,
        qty
    });
    return products;
}

console.log(addProduct('jacket', 'M', 150, 'beige', 31));

//252
function removeProduct(name){
    const newProducts = products.filter(product => product.name !== name);
    console.log(newProducts);
    return newProducts;
}

removeProduct('jacket');

//253
function sellProduct(name){
    const newProducts = products.map((product) => {
        if(product.name === name){
            return {
                ...product,
                qty: product.qty - 1,
            }
        }
        return product;
    });
    console.log(newProducts);
    return newProducts;
}
sellProduct(3);
//254
function restock(name, quantity){
    const newProducts = products.map((product) => {
        if(product.name === name){
            return {
                ...product,
                qty: product.qty + quantity,
            }
        }
        return product;
    });
    console.log(newProducts);
    return newProducts;
}
restock(3, 5);
//255
function findBySize(size){
    const filteredProducts = products.filter(product => product.size === size);
    if (!filteredProducts.length){
        console.log(`We don't have products in this size :(`)
    }else{
        console.log(filteredProducts);
    }

    return filteredProducts;
}
findBySize('XS');
//256
function findByColor(color){
    const filteredProducts = products.filter(product => product.color === color);
    if (!filteredProducts.length){
        console.log(`We don't have products in this color :(`)
    }else{
        console.log(filteredProducts);
    }
    return filteredProducts;
}
findByColor('red');
//257
function modifyProduct(name, property, newValue){
    const newProducts = products.map((product) => {
        if(product.name === name){
            return {
                ...product,
                property: newValue,
            }
        }
        return product;
    });
    console.log(newProducts);
    return newProducts;
}

modifyProduct('blouse', 'size', 'XL');
//258
function elevatePrices(percentage){
    const newProducts = products.map(product => {
        return {
            ...product,
            price: product.price +  product.price * percentage/100
        }
    });
    console.log(newProducts);
    return newProducts;
}

elevatePrices(25);

//259
function getProductsValue(){
    const newData = products.map(product => {
        return {
            name: product.name,
            value: product.price * product.qty,
        }
    });
    console.log(newData);
    return newData;
}
getProductsValue();

//260
function findLowOnStock(){
    const filteredProducts = products.filter(product => product.qty < 10).map(product => product.name);

    if (!filteredProducts.length){
        console.log(`No need to restock`)
    }else{
        console.log(filteredProducts);
    }
    return filteredProducts;
}

findLowOnStock();
