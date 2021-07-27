const foods = [
    {no: 1, name: 'bread', quantity: '50'},
    {no: 2, name: 'milk', quantity: '5'},
    {no: 3, name: 'egg', quantity: '10'},
];

const arr = foods.map(food => ({no: food.no, name: food.name, q : food.quantity}));
console.log(arr);