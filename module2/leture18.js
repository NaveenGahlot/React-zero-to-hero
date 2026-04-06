// Js Prototype & Inheritance

// examples
// const arr = [1, 2, 3, 4, 5];
// Array.prototype.sayHello = function(){
//     return "Hello from Array!";
// };
// Array.prototype.last = function() {
//     return this[this.length - 1];
// }
// console.log(arr.last()); // Logs the array itself

// console.log(arr.sayHello()); // Logs "Hello from Array!"
// console.log(arr.__proto__); // Logs the prototype of the array

// Arr -> Array.prototype -> Object.prototype -> null

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.greet = function(){
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
// }
// const user = new Person("John", 30);
// console.log(user.greet()); // Logs the user object
// console.log(user.__proto__); // Logs the prototype of the user object
// console.log(user.__proto__ === Person.prototype); // true

// Using Object.create() for Inheritance 
// const userModule={
//     sayHi:function(){
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }
// const user = Object.create(userModule);
// user.name = "John";
// user.age = 30;
// console.log(user.sayHi()); // Logs "Hello, my name is John and I am 30 years old."

// Traditional way - Inheritance 
// function Animal(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Animal.prototype.speak = function() {
//     return `${this.name} makes a noise.`;
// };

// function Dog(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.wagTail = function() {
//     return `${this.name} wags its tail.`;
// }

// const dog = new Dog("Buddy", 5);
// console.log(dog.speak()); // Logs "Buddy makes a noise."
// console.log(dog.wagTail()); // Logs "Buddy wags its tail."
// console.log(dog instanceof Dog); // true
// console.log(dog instanceof Animal); // true
// console.log(dog.__proto__); // Logs the prototype of the dog object
// console.log(Dog.prototype.__proto__); // Logs the prototype of the Dog prototype
// console.log(Animal.prototype); // Logs the prototype of the Animal prototype

// Transition to ES6 Classes
class Animal{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        return `${this.name} makes a noise.`;
    }
}

class Dog extends Animal {
    wagTail() {
        return `${this.name} wags its tail.`;
    }
}

const dog = new Dog("Buddy", 5);
console.log(dog); // Logs the dog object
console.log(dog.speak()); // Logs "Buddy makes a noise."
console.log(dog.wagTail()); // Logs "Buddy wags its tail."
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
// console.log(dog.__proto__); // Logs the prototype of the dog object
// console.log(Dog.prototype.__proto__); // Logs the prototype of the Dog prototype