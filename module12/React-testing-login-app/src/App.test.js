import { render } from "@testing-library/react";
import App from "./App";

describe("Test the App Component", () => {
  test("header renders with `Learn React` in the document", () => {
    const component = render(<App />);
    const linkElement = component.getByText(/Learn React/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("Render Login Component in Document", () => {
    const { getByLabelText } = render(<App />);
    const labelEmail = getByLabelText("Email");
    expect(labelEmail).toBeTruthy();
  });
});
