export {};
let a:number = 3;
console.log(a);

let personName: string = "John Doe";      
console.log(personName);

const namesArr: string[] = ["Ajay", "Vijay", "Sanjay"];
namesArr.push("Rohit");
console.log(namesArr);

function addValues(x: string, y: number): string {
    return x + y.toString();
}
addValues("4", 5);

// Tuples exampleTuple: [string, number] = ["Hello", 42];

let address: [number, string, number];
address = [123, "Main Street", 456];

let person: { name: string; age: number; isStudent: boolean; isEmployed: boolean } = {
    name: "Alice",
    age: 30,
    isStudent: false,
    isEmployed: true
};
console.log(person);

// Optional
let anotherPerson: { name: string; age?: number } = {
    name: "Ajay"
};
console.log(anotherPerson);

function add(a: number, b?: number){
    return b ?  a + b : a;
}
console.log(add(5)); // Output: 5
console.log(add(5, 10)); // Output: 15

// interface
interface Person{
    name: string;
    id: number;
    age: number;
}
let person1: Person = {
    name: "Vijay",
    id: 1,
    age: 25
};
console.log(person1);

const user: Record<string, number> = {
    "Alice": 30,
    "Bob": 25,
    "Charlie": 35
};
console.log(user);

interface Student {
    name: string;
    age: number;
    grade: string;
}
type StudentRecord = Record<string, Student>;
const students: StudentRecord = {
    "student1": { name: "Alice", age: 20, grade: "A" },
    "student2": { name: "Bob", age: 22, grade: "B" },
    "student3": { name: "Charlie", age: 21, grade: "A" }
};
console.log(students);

// union & intersection
let person2: Person | Student;
person2 = {
    name: "Sanjay",
    id: 2,
    age: 28,
    grade: "A"
};
console.log(person2);

// type alais 
type count = string | number;
let countValue: count;
countValue = "10";
countValue = 10;
// countValue = True; // Error: Type 'boolean' is not assignable to type 'count'.
console.log(countValue);


// Never Type
const n: [] = [];
// n.push(1); // Error: Property 'push' does not exist on type '[]'.
console.log(n);

// generics
function gen<T>(a: T, b: T):T[]{
    return [a, b];
}
console.log(gen<number>(1, 2)); // Output: [1, 2]
console.log(gen<string>("Hello", "World")); // Output: ["Hello", "World"]

// Any Type 
function add1(a: any, b: any): any {
    return a + b;
}
console.log(add1(5, 10)); // Output: 15
console.log(add1("Hello, ", "World!")); // Output: "Hello, World!"