let numbers = [1, 2, 3, 4, 5];
let numbers1 = [
    [1, 2, 3],
    [4, 5, 9],
    [7, 8, 15]
]

function add(x, y){
    return x + y
}

test.each(numbers)("First test - Add 2 to %i", (myNum)=>{
    expect(add(2, myNum)).toBe(myNum + 2); 
}); 

test.each(numbers1)("Add %i to %i as total %i", (a, b, total)=>{
    expect(add(a, b)).toBe(total); 
}); 