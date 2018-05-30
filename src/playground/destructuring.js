// OBJECT destructuring

// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// }
//
// const { name = 'anon', age  } = person
//
// console.log(`${name} is ${age}.`);
//
// const { city, temp: temperature } = person.location
// console.log(city, temperature);


// const book = {
//   title: 'Ego is the enemy',
//   author: 'ryan holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }
//
// const { name: publisherName = 'Self-Published' } = book.publisher
//
// console.log(publisherName);


// ARRAY destructuring

const address = ['123 Fake St.', 'Anytown', 'USA', '90210']

const [, city, state] = address

console.log(`You are in ${city}, ${state}.`);




const item = ['coffee (hot)', '$2.00', '$2.50', '$3.00']

const [ drink, , mediumPrice ] = item

console.log(`A medium ${drink} costs ${mediumPrice}`);
