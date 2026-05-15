jest.setTimeout(30000); // Setting a global timeout of 30 seconds for all tests
describe("User Test cases", ()=>{
    test("User Test first", ()=>{
    expect(1).toBe(1);
}, 10000);
    test("User Test second", ()=>{
    expect(2).toBe(2);
}, 20000);
    test("User Test third", ()=>{
    expect(3).toBe(3);
}, 30000);
    test("User Test fourth", ()=>{
    expect(4).toBe(4);
}, 40000);
test("Async Response", async()=>{
    await new Promise(resolve => setTimeout(resolve, 100)); // Keep the async example without slowing down the suite
    expect(true).toBe(true);
})
})
