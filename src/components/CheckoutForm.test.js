import React from "react";
import MutationObserver from "mutationobserver-shim";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from "../App";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<App />);
});

test("shows success message on submit with form details", () => {});
