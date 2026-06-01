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
// export {};
