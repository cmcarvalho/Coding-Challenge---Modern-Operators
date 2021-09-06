const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Jonas'));
console.log(new Set(['Jonas']));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

ordersSet.delete('Risotto');
console.log(ordersSet);

console.log(ordersSet[0]);

ordersSet.forEach(element => {
  console.log(element);
});

for (const order of ordersSet) console.log(order);

// Example of how to use "Sets"
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);

console.log(staff);
console.log(staffUnique);

// How to convert Sets to Arrays
const array = [...staffUnique];
console.log(array);
