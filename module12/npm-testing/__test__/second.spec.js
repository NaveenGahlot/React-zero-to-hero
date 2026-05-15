let myVal = 1
let val
let users

function addOne(num) {
  return num + 1;
}

beforeEach(()=>{
  val = 1; // Resetting the value before each test
  users = [];
})

afterEach(()=>{
  val = undefined; // Cleaning up the value after each test
})

beforeAll(()=>{
  users = [];
})

test('first test', () => {
  let result = myVal + 1;
  expect(result).toBe(2);  
  expect(val).toBe(1);
});


test('should add two numbers correctly', () => {
  let result = myVal + 1;
  expect(result).toBe(2); 
  expect(addOne(myVal)).toBe(2);
  expect(addOne(5)).toBe(6);
  expect(addOne(3)).toBe(4);
});

test("should add a user to the array", () => {
  users.push("John");
  expect(users.length).toBe(1);
  expect(users[0]).toBe("John");
});

test("should not retain previous users", ()=>{
  expect(users.length).toBe(0);
})
