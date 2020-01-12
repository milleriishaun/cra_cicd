import App from "./App";
import React from "react";
import { render } from "@testing-library/react";

// Test 1.2
test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
