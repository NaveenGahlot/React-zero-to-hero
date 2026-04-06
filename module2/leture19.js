// set and map in JavaScript
// Set is a collection of unique values, while Map is a collection of key-value pairs.

// understanding Set and Map in JavaScript
// A Set is a built-in object that allows you to store unique values of any type, whether primitive values or object references.
// A Map is a built-in object that allows you to store key-value pairs, where keys can be of any type.

// const mySet = new Set(); // Creating a new Set
// mySet.add(1); // Adding a number
// mySet.add(2); // Adding another number
// mySet.add(1); // Adding a third number

// console.log(mySet.has(1)); // Checking if the Set contains the number 1, Output: true
// console.log(mySet.has(3)); // Checking if the Set contains the number 3, Output: false
// console.log(mySet.delete(2)); // Deleting the number 2, Output: true
// console.log(mySet.size); // Getting the size of the Set, Output: 1
// mySet.add(10); // Adding a new number
// mySet.add(20); // Adding another new number
// console.log(mySet); // Output: Set { 1 }

// for(let value of mySet){
//     console.log(value); // Output: 1, 10, 20
// }

// const tags = ["JavaScript", "HTML", "CSS", "JavaScript", "React"];
// const uniqueTags = new Set(tags); // Creating a Set from the array to remove duplicates
// console.log(uniqueTags); // Output: Set { 'JavaScript', 'HTML', 'CSS', 'React' }

// map 
const myMap = new Map(); // Creating a new Map
myMap.set("name", "Alice"); // Adding a key-value pair
myMap.set("age", 30); // Adding another key-value pair
myMap.set("isStudent", false); // Adding a third key-value pair
console.log(myMap.get("name")); // Getting the value associated with the key "name", Output: Alice
console.log(myMap.get("age")); // Getting the value associated with the key "age", Output: 30
console.log(myMap.has("isStudent")); // Checking if the Map contains the key "isStudent", Output: true
console.log(myMap.size); // Getting the size of the Map, Output: 3
myMap.delete("age"); // Deleting the key "age"
console.log(myMap.size); // Getting the size of the Map after deletion, Output: 2
console.log(myMap); // Output: Map { 'name' => 'Alice', 'isStudent' => false }

for(let [key, value] of myMap){
    console.log(`${key}: ${value}`); // Output: name: Alice, isStudent: false
}

const userScore = new Map();
userScore.set("Alice", 85);
userScore.set("Bob", 90);
userScore.set("Charlie", 78);
userScore.set("Alice", 95);
console.log(userScore); // Output: Map { 'Alice' => 85, 'Bob' => 90, 'Charlie' => 78 }