const add =  (a, b) => {
  return a+b
}

console.log(add(55, 1))

const user = {
  name: 'Andrew',
  cities: ['Glendale', 'Oakland', 'Dublin'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city)
  }
}
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply());
