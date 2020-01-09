// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

test("the best flavor is grapefruit", () => {
  expect(bestLaCroixFlavor()).toBe("grapefruit");
});

// expect(document.getElementById("title")).toHaveTextContent(/CRA/i);

const bestLaCroixFlavor = () => {
  return "grapefruit";
};
