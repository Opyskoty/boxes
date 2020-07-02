import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Boxlist from "./Boxlist";

it("renders without crashing", () => {
  render(<Boxlist />)
});

it("matches the snapshot", () => {
  const { asFragment } = render(<Boxlist />);

  expect(asFragment()).toMatchSnapshot();
});

it("has the ability to enter data", () => {
  const { getByLabelText, queryByText, queryByTestId } = render(<Boxlist />);

  // no box yet
  expect(queryByTestId("box")).not.toBeInTheDocument();

  const widthInput = getByLabelText("Width");
  const heightInput = getByLabelText("Height");
  const backgroundColorInput = getByLabelText("Background Color");
  const submitButton = queryByText("Add a Box!");

  fireEvent.change(widthInput, { target: { value: 100 } });
  fireEvent.change(heightInput, { target: { value: 100 } });
  fireEvent.change(backgroundColorInput, { target: { value: "yellow" } });
  fireEvent.click(submitButton);

  expect(queryByTestId("box")).toBeInTheDocument();
});

it("has the ability to remove a box", () => {
  const { getByLabelText, queryByText, queryByTestId } = render(<Boxlist />);

  // no box yet
  expect(queryByTestId("box")).not.toBeInTheDocument();

  const widthInput = getByLabelText("Width");
  const heightInput = getByLabelText("Height");
  const backgroundColorInput = getByLabelText("Background Color");
  const submitButton = queryByText("Add a Box!");

  fireEvent.change(widthInput, { target: { value: 100 } });
  fireEvent.change(heightInput, { target: { value: 100 } });
  fireEvent.change(backgroundColorInput, { target: { value: "yellow" } });
  fireEvent.click(submitButton);

  expect(queryByTestId("box")).toBeInTheDocument();

  const removeButton = queryByText("X");
  fireEvent.click(removeButton);

  expect(queryByTestId("box")).not.toBeInTheDocument();
});


it("has the ability add multiple boxes", () => {
  const { getByLabelText, queryByText, queryByTestId, queryAllByTestId } = render(<Boxlist />);

  // no box yet
  expect(queryByTestId("box")).not.toBeInTheDocument();

  const widthInput = getByLabelText("Width");
  const heightInput = getByLabelText("Height");
  const backgroundColorInput = getByLabelText("Background Color");
  const submitButton = queryByText("Add a Box!");

  fireEvent.change(widthInput, { target: { value: 100 } });
  fireEvent.change(heightInput, { target: { value: 100 } });
  fireEvent.change(backgroundColorInput, { target: { value: "yellow" } });
  fireEvent.click(submitButton);

  fireEvent.change(widthInput, { target: { value: 300 } });
  fireEvent.change(heightInput, { target: { value: 300 } });
  fireEvent.change(backgroundColorInput, { target: { value: "pink" } });
  fireEvent.click(submitButton);

  fireEvent.change(widthInput, { target: { value: 400 } });
  fireEvent.change(heightInput, { target: { value: 400 } });
  fireEvent.change(backgroundColorInput, { target: { value: "blue" } });
  fireEvent.click(submitButton);

  expect(queryAllByTestId("box").length).toBe(3);
});