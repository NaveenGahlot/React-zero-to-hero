// Event Delegation & Event Bubbling 

// Event Bubbling
document.getElementById("grandParent").addEventListener("click", function(event){
    console.log("Grandparent clicked");
    // event.stopPropagation(); // Prevents the event from bubbling up to the parent elements
});

document.getElementById("parent").addEventListener("click", function(event){
    console.log("Parent clicked");
    // event.stopPropagation(); // Uncommenting this line will prevent the event from bubbling up to the grandparent
});

document.getElementById("child").addEventListener("click", function(event){
    console.log("Child clicked");
    // event.stopPropagation(); // Uncommenting this line will prevent the event from bubbling up to the parent and grandparent
});

document.getElementById("sibling").addEventListener("click", function(event){
    console.log("Sibling clicked");
    // event.stopPropagation(); // Uncommenting this line will prevent the event from bubbling up to the parent and grandparent
});

// The event listeners are set up on the grandparent, parent, child, and sibling elements.
// When you click on any of these elements, the corresponding message will be logged to the console.
// The `stopPropagation` method is used to prevent the event from bubbling up to parent elements.

// Event Delegation 
document.getElementById("menu");
menu.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        console.log("Menu item clicked:", event.target.textContent);
        // You can perform actions based on the clicked menu item
    }
})