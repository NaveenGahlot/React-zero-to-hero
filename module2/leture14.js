// let items = ["pencil", "pen", "eraser", "sharpener", "paper"];

// items.splice(2, 1); // Removes the item at index 2 (eraser)
// items.splice(3, 0, "marker"); // Inserts "marker" at index 3
// items.splice(2,2, "Scale", "ruler"); // Replaces items at index 2 and 3 with "Scale" and "ruler"
// console.log(items); // Output: ["pencil", "pen", "Scale", "ruler", "paper"]

let cart = ["milk", "bread", "eggs", "butter", "cheese"];

const preview = cart.slice(1, 4); // Extracts items from index 1 to 3 (not including index 4)
console.log(preview); // Output: ["bread", "eggs", "butter"]
console.log(cart); // Output: ["milk", "bread", "eggs", "butter", "cheese"]