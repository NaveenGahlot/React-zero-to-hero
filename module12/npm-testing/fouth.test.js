let myVal = 4;
let name = "John Doe";
let animals = ["cat", "dog", "rabbit"];

test("Fouth File", ()=>{
    expect(myVal).not.toBe(1);
    expect(myVal).toBeGreaterThanOrEqual(4);
    expect(name).toMatch(/John/);
    expect(animals).toContain("dog");
});

test("Object assignment", ()=>{
    const data = {one: 1};
    data["two"] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

let p = "Ajay";
let a = null;
test("Should be check truthy or falsy", ()=>{
    expect(p).toBeTruthy();
    expect(a).toBeFalsy();
});

function check(){
    throw new Error("This is an error");
}
test("Should be check error", ()=>{
    expect(check).toThrow();
    expect(check).toThrow("This is an error");
    expect(check).toThrow(/error/);
});
