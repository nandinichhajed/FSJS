// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// shoppingCart.splice(0, 0, 'Meat')
shoppingCart.unshift('Meat')
// ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.push('Sugar')
// ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar']

shoppingCart.splice(4, 1)
// ['Meat', 'Milk', 'Coffee', 'Tea', 'Sugar']

shoppingCart.splice(3, 1, 'Green Tea')
// ['Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar']
console.log(shoppingCart);