import { render, screen } from "@testing-library/react";
import BtnAlert from "./alert";

describe("Alert", () => {
  test("should display alert", () => {
    render(<BtnAlert />);
    expect(screen.getByText("Alert")).toBeInTheDocument();
  });
});
