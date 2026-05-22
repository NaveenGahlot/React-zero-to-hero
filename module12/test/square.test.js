const square = require("./Square");

const x = jest.fn();
describe("Should test Square File", () => {
  // test("test X function", () => {
  //   const sq = x(3);
  //   expect(sq).toBe(9);
  // });
  test("test X function", () => {
    x.mockImplementation((value) => value * value);
    // x.mockReturnValue(25);
    const result = x(5);
    expect(result).toBe(25);
    expect(x).toHaveBeenCalled();
    expect(x).toHaveBeenCalledWith(5);
  });
  test("test X function using Spy", () => {
    const spy = jest.spyOn(square, "x");
    // spy.mockImplementation((value) => value * value);

    // x.mockReturnValue(25);
    const result = square.x(5);
    expect(result).toBe(25);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(5);
    spy.mockRestore();
  });
});
