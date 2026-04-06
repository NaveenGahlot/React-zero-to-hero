// Ternary operater & short-circuiting

// Condition ? True : False

const age = 26; // Example age variable
// Using a ternary operator to determine if the person is an adult or a minor
const status = age >= 18 ? "Adult" : "Minor"; // Ternary operator to determine status based on age
console.log(status); // Output: Adult

// if(age >= 18) {
//    return "Adult"; 
// }else {
//    return "Minor";
// }

// Short-circuiting with logical operators

// const input = "" || "Default Value"; // If input is falsy, use "Default Value
// console.log(input); // Output: Default Value"

const isLoggedIn = true; // Example boolean variable
isLoggedIn && console.log("User is logged in"); // If isLoggedIn is true, log the message

// Using logical AND (&&) to conditionally execute a statement
const isAdmin = true; // Example boolean variable
// Using logical AND (&&) to conditionally execute a statement
isAdmin && console.log("User is an admin"); // If isAdmin is true, log the message