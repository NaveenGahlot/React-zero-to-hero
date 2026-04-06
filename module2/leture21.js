// Promises in JavaScript 
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// It allows you to write asynchronous code in a more manageable way, avoiding callback hell.
// A Promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

// Promises are created using the `Promise` constructor, which takes a function (executor) with two parameters: `resolve` and `reject`.

// const myPromise = new Promise((res, rej)=>{
//     if(true){
//         res("Promise resolved successfully!"); // Fulfilled state
//     }else{
//         rej("Promise rejected!"); // Rejected state
//     }
// })
// The `resolve` function is called when the operation is successful, and the `reject` function is called when it fails.

// You can handle the result of a Promise using the `then` and `catch` methods.
// myPromise.then(()=>{
//     console.log(res); // Output: Promise resolved successfully!
// }).catch((err)=>{
//     console.log(err); // Output: Promise rejected!
// }).finally(()=>{
//     console.log("Promise has been settled (either fulfilled or rejected).");
// });


// function orderFood(isRestaurantOpen){
//     return new Promise((res, rej)=>{
//         console.log("Placing order...");
//         setTimeout(()=>{
//             if(isRestaurantOpen){
//                 res("Order placed successfully! Your food will be ready soon.");
//             }else{
//                 rej("Sorry, the restaurant is closed. Unable to place your order.");
//             }
//         }, 2000); // Simulating a delay of 2 seconds
//     })
// }
// orderFood(false).then((res)=>{
//     console.log(res); // Output: Order placed successfully! Your food will be ready soon.
//     return "Enjoy your meal!";
// }).then((res)=>{
//     console.log(res); // Output: Enjoy your meal!
//     return "Thank you for dining with us!";
// }).catch((err)=>{
//     console.log(err); // Output: Sorry, the restaurant is closed. Unable to place your order.
//     return "Please visit us again when we are open.";
// }).finally(()=>{
//     console.log("thank you welcome again.");
// }); // Output: Order process completed.

// In this example, the `orderFood` function returns a Promise that simulates placing an order at a restaurant. 
// If the restaurant is open, it resolves the Promise with a success message after a delay of 2 seconds. 
// If the restaurant is closed, it rejects the Promise with an error message. 
// The `then`, `catch`, and `finally` methods are used to handle the result of the Promise.

fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{
    return res.json() // Convert the response to JSON
}).then((data)=>{
    console.log(data); // Output: Array of posts from the API 
    return "Data fetched successfully!"; // Returning a success message and the data
}).catch((err)=>{
    console.error("Error fetching data:", err); // Output: Error message if the fetch fails
    return "Failed to fetch data.";
}).finally(()=>{
    console.log("Fetch operation completed."); // Output: Fetch operation completed
    return "Thank you for using our service!";
})