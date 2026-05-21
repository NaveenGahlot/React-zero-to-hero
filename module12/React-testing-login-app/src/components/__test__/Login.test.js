import { fireEvent, render, screen } from "@testing-library/react";
import Login, { validateEmail } from "../Login";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  render(<Login />);
});

describe("Test Login Component", () => {
  test("Snapshort for Login Component", async () => {
    const { asFragment } = render(<Login />);
    expect(asFragment()).toMatchSnapshot();
  });
  test("Render Login Comopnent with 2 Buttons", async () => {
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(2);
  });
  test("Should validate for wrong email format", async () => {
    const testEmail = "ajay.suneja25";
    expect(validateEmail(testEmail)).not.toBe(true);
  });
  test("Should validate for right email format", () => {
    const testEmail = "ajay.suneja25@gmail.com";
    expect(validateEmail(testEmail)).toBe(true);
  });
  test("email input field should accept email", () => {
    const email = screen.getByPlaceholderText("Enter email");
    userEvent.type(email, "ajay.suneja");
    expect(email.value).not.toMatch("ajay.suneja25@gmail.com");
  });
  test("password input should have type Password", () => {
    const password = screen.getByPlaceholderText("Password");
    expect(password).toHaveAttribute("type", "password");
  });
  test("should able to reset form", () => {
    const resetbtn = screen.getByTestId("reset");
    const email = screen.getByPlaceholderText("Enter email");
    const password = screen.getByPlaceholderText("Password");
    userEvent.type(email, "ajay.suneja@gmail.com");
    userEvent.type(password, "123");
    fireEvent.click(resetbtn);
    expect(email.value).toMatch("");
    expect(password.value).toMatch("");
  });
  test("should able to submit form for success case", () => {
    const submitbtn = screen.getByTestId("submit");
    const email = screen.getByPlaceholderText("Enter email");
    const password = screen.getByPlaceholderText("Password");
    userEvent.type(email, "ajay.suneja@gmail.com");
    userEvent.type(password, "123");
    fireEvent.click(submitbtn);
    const userInfo = screen.getByText("ajay.suneja@gmail.com");
    expect(userInfo).toBeInTheDocument();
  });
  // test("should able to submit form for Error case", () => {
  //   const submitbtn = screen.getByTestId("submit");
  //   const email = screen.getByPlaceholderText("Enter email");
  //   const password = screen.getByPlaceholderText("Password");
  //   userEvent.type(email, "ajay.suneja");
  //   userEvent.type(password, "123");
  //   fireEvent.click(submitbtn);
  //   const userInfo = screen.getByText("Email is not valid");
  //   expect(userInfo).toBeInTheDocument();
  // });
});
