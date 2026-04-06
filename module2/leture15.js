// Mastering Spread & Rest Operators in JavaScript
// Spread Operator: Expanding elements of an iterable (like an array) into individual elements
// Rest Operator: Collecting multiple elements into a single array

// Spread Operator Example
// const  newAarr = [...oldArray];
// const newObj = [...oldObj];

// const nums = [1, 2, 3, 4, 5];
// const copy = [6, 7, ...nums, 8, 9]; // Creates a shallow copy of nums
// console.log(copy); // Output: [6, 7, 1, 2, 3, 4, 5, 8, 9]

// const newStudent = {
//     name: "John",
// }
// const copy1 = {...newStudent, age: 20, city: "New York" }; // Creates a shallow copy of newStudent and adds age and city
// console.log(copy1); // Output: { name: 'John', age: 20, city: 'New York' }

// const a = [1, 2, 3, 4, 5];
// const b = [6, 7, 8, 9, 10];
// const combined = [...a, ...b]; // Combines arrays a and b
// console.log(combined); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sum(a,b,c){
    return a + b + c;
}
const values = [1, 2, 3];
console.log(sum(...values)); // Output: 6

// Using Rest Operator
// function logAll(...items) {
//     console.log(items); // Logs all items passed as arguments
// }
// logAll("pen", "pencil", "eraser", "sharpener", "paper");   

const [first, second, third, ...rest] = [1, 2, 3, 4, 5]; // Destructuring assignment to extract values from an array 
console.log(first, second, third, rest); // Output: 1 2 3 [4, 5]