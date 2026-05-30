export {};
let a:number = 3;
console.log(a);

let personName: string = "John Doe";      
console.log(personName);

const namesArr: string[] = ["Ajay", "Vijay", "Sanjay"];
console.log(namesArr);

function addValues(x: string, y: number): string {
    return x + y.toString();
}
addValues("4", 5);