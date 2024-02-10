const items = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
];
//1. Filter and show the product that will be bought when you don't have much money (Cheap one)
const cheap = items.filter(item => item.price <=  10)
console.log(cheap)

// 2. Filter and show the product that will be expensive in the array
const expensive = items.filter(item => item.price >= 1000)
console.log(expensive)

// 3. Calculate the full price of all products combined
const fullprice = items.reduce((a, b) => { return a + b.price}, 0)
console.log(fullprice)


// 4. Calculate the full price of all products combined and remove products that are under $10
const expensives = items.filter((item) => item.price >= 10).reduce((a,b) => {return a+b.price}, 0)
console.log(expensives)

//5. Filter and show the product that will be start with letter b at first postion
const character = items.filter(item => item.name.charAt(0) === 'B');
console.log(character);
