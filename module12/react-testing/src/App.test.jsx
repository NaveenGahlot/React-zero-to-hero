import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"
import { expect } from "vitest"

test("App Component Should Display React Testing", () => {
  const { getByText, debug, getByTestId, getByRole } = render(<App />) 
  debug()
  const headingElement = getByTestId(/heading/i) 
  expect(headingElement).toBeTruthy()
  expect(headingElement.tagName).toBe("H1")
  expect(headingElement.textContent).toBe("React Testing")

  let btn = getByRole("button")
  fireEvent.click(btn)
})
