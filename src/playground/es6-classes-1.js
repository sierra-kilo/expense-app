class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if(this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }
    return description
  }
}

class Traveler extends Person {
  constructor (name, age, home) {
    super(name, age)
    this.home = home
  }
  // hasHome() {
  //   return !!this.home;
  // }
  getGreeting() {
    let greeting = super.getGreeting();
    if(this.home) {
      greeting += `Im visiting from ${this.home}`
    }
    return greeting;
  }
}

const me = new Traveler('Andrew Mead', 5, 'Springfield');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
