var smartPhones = [ 
    { name: 'iphone', price: 649 }, 
    { name: 'Galaxy S6', price: 576 }, 
    { name: 'Galaxy Note 5', price: 489 } 
];

function price(smartPhones) {
    return smartPhones.reduce((sum, smartPhone) => {
        return sum + smartPhone.price;
    }, 0);
}

console.log(price(smartPhones));