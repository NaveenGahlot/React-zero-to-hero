// call, Apply, bing 
const user1 = {
    name: "Ajay",
    age: 25,
}

const user2 = {
    name: "Vijay",
    age: 30,
}

function printDetails(city, state) {
    console.log(`Name: ${this.name}, Age: ${this.age}, City: ${city} State: ${state}`);
}

// Using call
printDetails.call(user1, "Jaiput", "Rajasthan"); // Name: Ajay, Age: 25 City: Jaiput State: Rajasthan
printDetails.apply(user2, ["Siker", "Rajasthan"]); // Name: Vijay, Age: 30 city: Siker State: Rajasthan


const mkDetails = printDetails.bind(user1, "Jaiput", "Rajasthan"); // Name: Ajay, Age: 25 City: Jaiput State: Rajasthan
mkDetails(); // Name: Ajay, Age: 25 City: Jaiput State: Rajasthan

const obj = {
    name: "Ajay",
    greet: function() {
        return `Hello ${this.name}`;
    }
}
const greetFn = obj.greet.bind(obj);  // Using bind 
console.log(greetFn()); // Hello Ajay