let a = 3;
console.log(a);
let personName = "John Doe";
console.log(personName);
const namesArr = ["Ajay", "Vijay", "Sanjay"];
namesArr.push("Rohit");
console.log(namesArr);
function addValues(x, y) {
    return x + y.toString();
}
addValues("4", 5);
// Tuples exampleTuple: [string, number] = ["Hello", 42];
let address;
address = [123, "Main Street", 456];
let person = {
    name: "Alice",
    age: 30,
    isStudent: false,
    isEmployed: true
};
console.log(person);
// Optional
let anotherPerson = {
    name: "Ajay"
};
console.log(anotherPerson);
function add(a, b) {
    return b ? a + b : a;
}
console.log(add(5)); // Output: 5
console.log(add(5, 10)); // Output: 15
let person1 = {
    name: "Vijay",
    id: 1,
    age: 25
};
console.log(person1);
const user = {
    "Alice": 30,
    "Bob": 25,
    "Charlie": 35
};
console.log(user);
const students = {
    "student1": { name: "Alice", age: 20, grade: "A" },
    "student2": { name: "Bob", age: 22, grade: "B" },
    "student3": { name: "Charlie", age: 21, grade: "A" }
};
console.log(students);
// union & intersection
let person2;
person2 = {
    name: "Sanjay",
    id: 2,
    age: 28,
    grade: "A"
};
console.log(person2);
let countValue;
countValue = "10";
countValue = 10;
// countValue = True; // Error: Type 'boolean' is not assignable to type 'count'.
console.log(countValue);
// Never Type
const n = [];
// n.push(1); // Error: Property 'push' does not exist on type '[]'.
console.log(n);
// generics
function gen(a, b) {
    return [a, b];
}
console.log(gen(1, 2)); // Output: [1, 2]
console.log(gen("Hello", "World")); // Output: ["Hello", "World"]
// Any Type 
function add1(a, b) {
    return a + b;
}
console.log(add1(5, 10)); // Output: 15
console.log(add1("Hello, ", "World!")); // Output: "Hello, World!"
// export {};
