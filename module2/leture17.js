// Boolean values is JS

// Boolean values in JavaScript can be true or false
// They are often used in conditional statements to control the flow of the program

// Example of boolean values
const isTrue = true; // A boolean variable set to true
const isFalse = false; // A boolean variable set to false
console.log(isTrue); // Output: true
console.log(isFalse); // Output: false

// Boolean values can be used in conditional statements
if (isTrue) {
    console.log("This will execute because isTrue is true");
} else {
    console.log("This will not execute");
}

if (!isFalse) {
    console.log("This will execute because isFalse is false");
}else {
    console.log("This will not execute");
}

// Boolean values can also be used in logical operations
const a = true;
const b = false;
const c = a && b; // Logical AND operation
console.log(c); // Output: false (because one of the operands is false)

const d = a || b; // Logical OR operation
console.log(d); // Output: true (because one of the operands is true)
// Boolean values can be used in comparisons
const x = 5;
const y = 10;
const isEqual = (x === y); // Strict equality comparison
console.log(isEqual); // Output: false (because 5 is not equal to 10)

// Boolean values can also be used in functions
function isAdult(age) {
    return age >= 18; // Returns true if age is 18 or older, false otherwise
}
console.log(isAdult(20)); // Output: true (because 20 is greater than 18)
console.log(isAdult(16)); // Output: false (because 16 is less than 18)

// Boolean values can be used in loops
let count = 0;  
while (count < 5) {
    console.log(count);
    count++; // Increment count
}

// Boolean values can also be used in arrays
const booleanArray = [true, false, true, false];
console.log(booleanArray); // Output: [true, false, true, false]

// Boolean values can be used in objects
const user = {
    name: "Alice",
    isActive: true // Boolean property indicating if the user is active
};
console.log(user); // Output: { name: 'Alice', isActive: true }

console.log("------------------------------------------------------");
// Boolean values can also be represented as numbers in JavaScript
// In JavaScript, boolean values can be implicitly converted to numbers
// true is converted to 1 and false is converted to 0
// 0 -> false
// 1 -> true


// Falsy values in JavaScript
// Falsy values are values that evaluate to false in a boolean context
// The following values are considered falsy:
// 0, "", null, undefined, NaN, false

if(0) {
    console.log("This will not execute because 0 is falsy");
}
if("") {
    console.log("This will not execute because an empty string is falsy");
}
if(null) {
    console.log("This will not execute because null is falsy");
}   
if(undefined) {
    console.log("This will not execute because undefined is falsy");
}

if("Hello") {
    console.log("This will execute because a non-empty string is truthy");
}
if(123) {
    console.log("This will execute because a non-zero number is truthy");
}
if(true) {
    console.log("This will execute because true is truthy");
}
if([]) {
    console.log("This will execute because an empty array is truthy");
}
if({}) {
    console.log("This will execute because an empty object is truthy");
}

console.log(Boolean(0)); // Output: false (0 is falsy)
console.log(Boolean("")); // Output: false (empty string is falsy)
console.log(Boolean(null)); // Output: false (null is falsy)
console.log(Boolean(undefined)); // Output: false (undefined is falsy)
console.log(Boolean(NaN)); // Output: false (NaN is falsy)  
console.log(Boolean(false)); // Output: false (false is falsy)   