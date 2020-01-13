import App from "./App";
import React from "react";
import { render } from "@testing-library/react";

// Test 1.2
// Netlify CLI is added to package.json and all tests passing,
// so should auto-deploy from travisci using netlify credentials.
test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
