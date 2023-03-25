import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "./navBar";

describe("DisplayData", () => {
  it("should render the component", async () => {
    const { baseElement } = render(<NavBar />);
    expect(baseElement).toBeDefined();
  });
});
