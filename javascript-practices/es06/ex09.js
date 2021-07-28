const foods = [
    {no: 1, name: 'bread', quantity: '50'},
    {no: 2, name: 'milk', quantity: '5'},
    {no: 3, name: 'egg', quantity: '20'},
    {no: 4, name: 'coffee', quantity: '20'},
];

// map
const arr = foods.map(food => ({no: food.no, name: food.name, q : food.quantity}));
console.log(arr);

// filter
const arr2 = foods.filter(food => food.quantity >= 20);
console.log(arr2)