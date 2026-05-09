jest.setTimeout(30000); // Setting a global timeout of 30 seconds for all tests
describe("User Test cases", ()=>{
    test("User Test first", ()=>{
    expect(1).toBe(1);
    console.log("First test completed");
}, 10000);
    test("User Test second", ()=>{
    expect(2).toBe(2);
    console.log("Second test completed");
}, 20000);
    test("User Test third", ()=>{
    expect(3).toBe(3);
    console.log("Third test completed");
}, 30000);
    test("User Test fourth", ()=>{
    expect(4).toBe(4);
    console.log("Fourth test completed");
}, 40000);
test.only("Async Response", async()=>{
    await new Promise(resolve => setTimeout(resolve, 15000)); // Simulating an async operation with a 5-second delay
    expect(true).toBe(true);
    console.log("Async test completed");
})
})