import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("counter shows initial state", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
  it("counter should increment by 1 if inc is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incBtn = getByRole("button", { name: "Increment" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incBtn);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });
  it("counter should decrement by 1 if dec is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const decBtn = getByRole("button", { name: "Decrement" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(decBtn);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(-1);
  });
  it("counter should set to 0 if restart button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const restartBtn = getByRole("button", { name: "Restart" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(50);
    fireEvent.click(restartBtn);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(0);
  });
  it("counter should invert the signs 0 if switch button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={-10} />);
    const switchBtn = getByRole("button", { name: "Switch Signs" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(-10);
    fireEvent.click(switchBtn);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(10);
  });
});
