// Memoization is a technique used to optimize the performance of functions by caching their results. This is particularly useful for functions that are called frequently with the same arguments, as it avoids redundant calculations.

// why Use Memoization?
// 1. Performance Improvement: It speeds up the execution of functions by storing previously computed results.
// 2. Avoids Redundant Calculations: It prevents the function from recalculating results for the same inputs, which is especially beneficial for recursive functions or those with expensive computations.
// 3. Enhances Efficiency: It can significantly reduce the time complexity of algorithms, especially in cases like dynamic programming.

// function slowAdds(a,b){
//     for(let i=0; i<1e8; i++){}
//     return a + b;
// }

// console.time("slowAdds");
// console.log(slowAdds(5,10)); // 15
// console.timeEnd("slowAdds"); // Time taken for the first call

// console.time("slowAdds");
// console.log(slowAdds(5,10)); // 15
// console.timeEnd("slowAdds"); // Time taken for the first call

function memoizeAdd(){
    const cache = {};
    return function(a, b){
        const key = `${a},${b}`;
        if(cache[key]){ 
            return cache[key];
        } 
        for(let i=0; i<1e8; i++){} // Simulating a slow operation
        const result = a + b;
        cache[key] = result;
        return result;
    }
}
const Add = memoizeAdd();

console.time("with memo");
console.log(Add(5,10)); // 15
console.timeEnd("with memo"); // Time taken for the first call

console.time("with memo again");
console.log(Add(5,10)); // 15
console.timeEnd("with memo again"); // Time taken for the first call again