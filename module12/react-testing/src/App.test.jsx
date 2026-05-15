import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"
import { expect } from "vitest"

test("App Component Should Display React Testing", () => {
  const {getByText, debug } = render(<App />) 
  debug()
  const headingElement = getByText(/React Testing/i) 
  expect(headingElement.tagName).toBe("H1")
  expect(headingElement.textContent).toBe("React Testing")
})
