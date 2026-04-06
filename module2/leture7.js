class Person{
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name(){
        return this._name; 
    }
    set name(newName){
        if(newName){
            this._name = newName; 
        }else{
            console.log("Name cannot be empty.");
        }
    }
}

const person = new Person("Ajay", 25); 
console.log(person.name); // Output: Ajay  

person.name = "Vijay"; // Using setter to change name
console.log(person.name); // Output: Vijay

person.name = ""; // Trying to set an empty name
console.log(person.name); // Output: Vijay (unchanged, as empty name is not allowed)