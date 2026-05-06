let myVal = 1

function addOne(num) {
  return num + 1;
}

test('should add two numbers correctly', () => {
  let result = myVal + 1;
  expect(result).toBe(2); 
  expect(addOne(myVal)).toBe(2);
  expect(addOne(5)).toBe(6);
  expect(addOne(3)).toBe(4);
});
