let myVal = 1

function addOne(num) {
  return num + 1;
}

beforeEach(()=>{
  console.log("Running before each test");
  val = 1; // Resetting the value before each test
})

afterEach(()=>{
  console.log("Running after each test");
  val = undefined; // Cleaning up the value after each test
})

beforeAll(()=>{
  console.log("Running before all tests");
  user = []; // Initializing the user array before all tests
})

afterAll(()=>{
  console.log("Running after all tests");
})

test('first test', () => {
  let result = myVal + 1;
  expect(result).toBe(2);  
  expect(val).toBe(1); // This will fail because val is not defined in this scope
  console.log("First test completed");
});


test('should add two numbers correctly', () => {
  let result = myVal + 1;
  expect(result).toBe(2); 
  expect(addOne(myVal)).toBe(2);
  expect(addOne(5)).toBe(6);
  expect(addOne(3)).toBe(4);
  console.log("Second test completed");
});

test("should add a user to the array", () => {
  user.push("John");
  expect(user.length).toBe(1);
  expect(user[0]).toBe("John");
  console.log("Third test completed");
});

test("should not retain previous users", ()=>{
  expect(user.length).toBe(1); // This will fail because user is not defined in this scope
  console.log("Fourth test completed");
})
