import React from "react";
import Box from "./Box";
import { render } from "@testing-library/react";

// Why do we need curly braces?
it("renders without crashing", () => {
  render(<Box />)
});

it("matches the snapshot", () => {
  const { asFragment } = render(<Box />);

  expect(asFragment()).toMatchSnapshot();
});