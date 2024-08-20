import React from "react";
import { describe, it, expect } from "vitest";

import { render } from "../../../utils/test-utils";
import Home from "../index";
import { fireEvent } from "@testing-library/react";

describe("Tests for Home Screen", () => {
  it("should render the home screen elements correctly", () => {
    const { getByRole, getByPlaceholderText, queryByTestId } = render(<Home />);
    const increaseButtonElement = getByRole("button", { name: /increase by 1/i });
    const decreaseButtonElement = getByRole("button", { name: /decrease by 1/i });
    const inputElement = getByPlaceholderText(/Increase by number.../i);
    const counterStateElement = queryByTestId("counter");

    expect(increaseButtonElement).toBeTruthy();
    expect(decreaseButtonElement).toBeTruthy();
    expect(inputElement).toBeTruthy();
    expect(counterStateElement?.textContent).toBe("0");
  });

  it("should increase by count by 1 if increase by 1 button is pressed", () => {
    const { getByRole, queryByTestId } = render(<Home />);
    const increaseByOneButton = getByRole("button", { name: /increase by 1/i });
    const counterStateElement = queryByTestId("counter");

    expect(counterStateElement?.textContent).toBe("0");

    fireEvent.click(increaseByOneButton);

    expect(counterStateElement?.textContent).toBe("1");
  });

  it("should decrease by count by 1 if decrease by 1 button is pressed", () => {
    const { getByRole, queryByTestId } = render(<Home />);
    const decreaseByOneButton = getByRole("button", { name: /decrease by 1/i });
    const counterStateElement = queryByTestId("counter");

    expect(counterStateElement?.textContent).toBe("1");

    fireEvent.click(decreaseByOneButton);

    expect(counterStateElement?.textContent).toBe("0");
  });

  it("should increase the count by the value typed in the input", () => {
    const { getByPlaceholderText, queryByTestId } = render(<Home />);
    const inputElement = getByPlaceholderText(/Increase by number.../i);
    const counterStateElement = queryByTestId("counter");

    expect(counterStateElement?.textContent).toBe("0");

    fireEvent.change(inputElement, { target: { value: "3" } });

    expect(counterStateElement?.textContent).toBe("3");

    fireEvent.change(inputElement, { target: { value: "-2" } });

    expect(counterStateElement?.textContent).toBe("1");
  });
});
