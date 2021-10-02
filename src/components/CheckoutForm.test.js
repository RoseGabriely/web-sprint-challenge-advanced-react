import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const firstName = screen.getByLabelText("First Name:");
  userEvent.type(firstName, "Rose");

  expect(firstName).toHaveValue("Rose");

  const lastName = screen.getByLabelText("Last Name:");
  userEvent.type(lastName, "Gabriely");
  expect(lastName).toHaveValue("Gabriely");

  const address = screen.getByLabelText("Address:");
  userEvent.type(address, "123 xy st.");
  expect(address).toHaveValue("123 xy st.");

  const city = screen.getByLabelText("City:");
  userEvent.type(city, "NYC");
  expect(city).toHaveValue("NYC");

  const state = screen.getByLabelText("State:");
  userEvent.type(state, "MA");
  expect(state).toHaveValue("MA");

  const zip = screen.getByLabelText("Zip:");
  userEvent.type(zip, "00000");
  expect(zip).toHaveValue("00000");

  const button = screen.getByRole("button");
  userEvent.click(button);

  expect(screen.getByTestId("successMessage")).toBeInTheDocument();
});
